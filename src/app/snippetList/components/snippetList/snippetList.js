import Header from "app/header/container/headerContainer";
import * as S from "./style";
import React from "react";

import SortBarContainer from "app/snippetList/container/sortBarContainer";
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
    <>
      <Header />

      <S.ContentContainer>
        <S.ContentWarpper>
          <SortBarContainer />
          <S.MainContainer>{snippetItems}</S.MainContainer>
        </S.ContentWarpper>
      </S.ContentContainer>
    </>
  );
};

export default SnippetList;
