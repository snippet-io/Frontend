import React, { useEffect } from "react";
import Editor from "react-simple-code-editor";
import Header from "app/header/container/headerContainer";
import * as S from "./style";
import { postCreateSnippetAPI } from "lib/api";
import { highlight, languages } from "prismjs/components/prism-core";

const CreateSnippet = ({ inputs, onChangeInput, setInputs }) => {
  const { title, language, description, code } = inputs;

  return (
    <div>
      <Header />
      <S.SnippetCotainer>
        <S.SnippetSection>
          <S.SnippetInputsContainer>
            <form>
              <S.HeadContainer>
                <S.SnippetTitle
                  type="text"
                  placeholder="snippet title"
                  name="title"
                  value={title}
                  onChange={onChangeInput}
                />
                <S.LangDropdownSelect>
                  <S.LangDropdownOption value={language}>
                    Python
                  </S.LangDropdownOption>
                </S.LangDropdownSelect>
              </S.HeadContainer>

              <S.SnippetCodeSection>
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
              </S.SnippetCodeSection>
              <S.SnippetDescription
                type="text"
                name="description"
                placeholder="snippet description..."
                value={description}
                onChange={onChangeInput}
              />
            </form>
            <S.SnippetAddButton
              onClick={() => {
                postCreateSnippetAPI(inputs);
              }}
            >
              ADD
            </S.SnippetAddButton>
          </S.SnippetInputsContainer>
        </S.SnippetSection>
      </S.SnippetCotainer>
    </div>
  );
};

export default CreateSnippet;
