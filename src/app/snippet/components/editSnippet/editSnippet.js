import HeaderContainer from "app/header/container/headerContainer";
import { useState } from "react";
import CodeEditor from "../editor";
import * as GlobalS from "../style";
import SnippetTitle from "../snippetTitle";
import Description from "../description";
import LangDropDown from "../langDropdown";

const EditSnippet = () => {
  const [snippet, setSnippet] = useState({
    title: "title",
    code: "code",
    language: "python",
  });
  return (
    <>
      <HeaderContainer />
      <GlobalS.SnippetCotainer>
        <GlobalS.SnippetSection>
          <GlobalS.HeadContainer>
            <SnippetTitle title={snippet.title} />
            <LangDropDown language={snippet.language} />
          </GlobalS.HeadContainer>
          <GlobalS.SnippetCodeSection>
            <CodeEditor
              code={snippet.code}
              inputs={snippet}
              setInputs={setSnippet}
              language="python"
            />
          </GlobalS.SnippetCodeSection>
          <Description />
          <GlobalS.SnippetInputsContainer>
            <GlobalS.SnippetButton>EDIT</GlobalS.SnippetButton>
          </GlobalS.SnippetInputsContainer>
        </GlobalS.SnippetSection>
      </GlobalS.SnippetCotainer>
    </>
  );
};

export default EditSnippet;
