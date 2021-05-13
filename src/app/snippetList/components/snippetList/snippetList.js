import Header from "app/header/container/headerContainer";
import * as S from "./style";
import React from "react";

import SnippetItemContainer from "app/snippetList/container/snippetItemContainer";

const SnippetList = ({ snippets }) => {
  const snippetItems = snippets.map((snippet) => {
    console.log(snippet);
    return (
      <SnippetItemContainer
        key={snippet.id}
        snippet={snippet}
      ></SnippetItemContainer>
    );
  });

  return (
    <div>
      <Header />

      <S.ContentContainer>
        <S.ContentWarpper>
          <S.MainContainer>{snippetItems}</S.MainContainer>
        </S.ContentWarpper>
      </S.ContentContainer>
    </div>
  );
};

export default SnippetList;
