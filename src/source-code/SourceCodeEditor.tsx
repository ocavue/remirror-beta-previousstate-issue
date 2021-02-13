import "../../node_modules/codemirror/mode/meta"; // This must be imported.
import "../../node_modules/codemirror/lib/codemirror.css";
import "../../node_modules/codemirror/mode/javascript/javascript";
import "../../node_modules/codemirror/mode/yaml/yaml";

import { Remirror, useRemirrorContext } from "@remirror/react";
import React, { FC, useMemo } from "react";

import { useSourceCodeRemirror } from "./manager";

const InnerEditor: FC = () => {
  const { getRootProps } = useRemirrorContext();
  return <div {...getRootProps()} />;
};

const SourceCodeEditor: FC = () => {
  console.log("[SourceCodeEditor]", new Date());

  const { manager } = useSourceCodeRemirror();

  const initialNode = useMemo(() => {
    const schema = manager.schema;
    const initialNode = schema.nodes.doc.create(
      {},
      schema.nodes.codeMirror.create({}, schema.text("default content"))
    );
    return initialNode;
  }, [manager]);

  return (
    <Remirror
      manager={manager}
      autoFocus={true}
      initialContent={initialNode}
      editable={true}
      attributes={{ "data-testid": "source_code_mode_textarea" }}
    >
      <InnerEditor />
    </Remirror>
  );
};


export default SourceCodeEditor;
