import { CodeMirrorExtension } from "@remirror/extension-codemirror5";
import { useRemirror } from "@remirror/react";
import CodeMirror from "codemirror";

export function useSourceCodeRemirror() {
  return useRemirror({
    extensions: () => [
      new CodeMirrorExtension({
        CodeMirror,
        defaultCodeMirrorConfig: { mode: "text/x-markdown" }
      })
    ]
  });
}

// export type SourceCodeManager = ReturnType<
//   typeof useSourceCodeRemirror
// >["manager"];
// export type SourceCodeSchema = SourceCodeManager["schema"];
// export type SourceCodeExtension = SourceCodeManager["extensions"][number];
