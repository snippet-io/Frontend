import HeaderContainer from "app/header/container/headerContainer";
import CodeEditor from "../editor";
import * as GlobalS from "../style";
import SnippetTitle from "../snippetTitle";
import Description from "../description";
import LangDropDown from "../langDropdown";

const EditSnippet = ({ snippetState, onChangeInput, modifySnippet }) => {
  return (
    <>
      <HeaderContainer />
      <GlobalS.SnippetCotainer>
        <GlobalS.SnippetSection>
          <GlobalS.HeadContainer>
            <SnippetTitle
              title={snippetState.title}
              onChangeInput={onChangeInput}
            />
            <LangDropDown language={snippetState.language} />
          </GlobalS.HeadContainer>
          <GlobalS.SnippetCodeSection>
            <CodeEditor
              code={snippetState.code}
              inputs={snippetState}
              setInputs={snippetState.setSnippet}
              language="python"
            />
          </GlobalS.SnippetCodeSection>
          <Description
            description={snippetState.description}
            onChangeInput={onChangeInput}
          />
          <GlobalS.SnippetInputsContainer>
            <GlobalS.SnippetButton onClick={modifySnippet}>
              EDIT
            </GlobalS.SnippetButton>
          </GlobalS.SnippetInputsContainer>
        </GlobalS.SnippetSection>
      </GlobalS.SnippetCotainer>
    </>
  );
};

export default EditSnippet;
