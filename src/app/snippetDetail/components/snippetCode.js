import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import * as S from "./style";

const SnippetCode = ({ code, language }) => {
  return (
    <S.SnippetCode>
      <Editor
        value={code}
        readOnly={true}
        highlight={(code) => highlight(code, languages[language.getFullName()])}
      />
    </S.SnippetCode>
  );
};

export default SnippetCode;
