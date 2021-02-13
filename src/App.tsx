import "../node_modules/codemirror/lib/codemirror.css";
import "../node_modules/codemirror/theme/nord.css";

import SourceCodeEditor from "./source-code/SourceCodeEditor";
export default function App() {
  return (
    <div>
      <div>
        <h1>example</h1>
      </div>

      <SourceCodeEditor />
    </div>
  );
}
