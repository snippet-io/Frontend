import React from "react";
import Header from "app/header/container/headerContainer";
import * as S from "../style";
import { useState } from "react";

import SnippetTitle from "../snippetTitle";
import LangDropDown from "../langDropdown";
import CodeEditor from "../editor";
import Description from "../description";
import SnippetAddButton from "./addButton";
import languageList from "lib/languages";

const CreateSnippet = ({
  inputs,
  onChangeInput,
  setInputs,
  postingSnippet,
}) => {
  const { title, description, code } = inputs;
  const languages = Object.keys(languageList);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageList.Python.getFullName()
  );

  return (
    <>
      <Header />
      <S.SnippetCotainer>
        <S.SnippetSection>
          <S.HeadContainer>
            <SnippetTitle title={title} onChangeInput={onChangeInput} />
            <LangDropDown
              onChangeInput={onChangeInput}
              languages={languages}
              setSelectedLanguage={setSelectedLanguage}
              languageList={languageList}
              snippetState={inputs}
            />
          </S.HeadContainer>

          <S.SnippetCodeSection>
            <CodeEditor
              code={code}
              setInputs={setInputs}
              inputs={inputs}
              language={selectedLanguage}
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
    </>
  );
};

export default CreateSnippet;
