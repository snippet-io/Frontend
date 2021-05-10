import React from "react";
import Header from "app/header/container/headerContainer";
import * as S from "../style";

import SnippetTitle from "../snippetTitle";
import LangDropDown from "../langDropdown";
import CodeEditor from "../editor";
import Description from "../description";
import SnippetAddButton from "./addButton";

const CreateSnippet = ({
  inputs,
  onChangeInput,
  setInputs,
  postingSnippet,
}) => {
  const { title, language, description, code } = inputs;

  return (
    <div>
      <Header />
      <S.SnippetCotainer>
        <S.SnippetSection>
          <S.HeadContainer>
            <SnippetTitle title={title} onChangeInput={onChangeInput} />
            <LangDropDown language={language} />
          </S.HeadContainer>

          <S.SnippetCodeSection>
            <CodeEditor
              code={code}
              setInputs={setInputs}
              inputs={inputs}
              language={language}
            />
          </S.SnippetCodeSection>
          <Description
            description={description}
            onChangeInput={onChangeInput}
          />
          <S.SnippetInputsContainer>
            <SnippetAddButton
              type="submit"
              postingSnippet={postingSnippet}
              inputs={inputs}
            />
          </S.SnippetInputsContainer>
        </S.SnippetSection>
      </S.SnippetCotainer>
    </div>
  );
};

export default CreateSnippet;
