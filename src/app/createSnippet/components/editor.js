import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";

const CodeEditor = ({ code, setInputs, inputs, language }) => {
  return (
    <Editor
      value={code}
      onValueChange={(code) =>
        setInputs({
          ...inputs,
          code: code,
        })
      }
      padding={10}
      highlight={(code) => highlight(code, languages[language])}
      style={{
        height: "20rem",
        fontFamily: "monospace",
        fontSize: 16,
      }}
    />
  );
};

export default CodeEditor;
