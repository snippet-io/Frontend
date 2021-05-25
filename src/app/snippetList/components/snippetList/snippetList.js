import Header from "app/header/container/headerContainer";
import * as S from "./style";
import React, { useEffect, useState } from "react";

import SortBarContainer from "app/snippetList/container/sortBarContainer";
import SnippetItemContainer from "app/snippetList/container/snippetItemContainer";

const SnippetList = ({
  snippets,
  isLoading,
  userData,
  setSnippets,
  setIsLoading,
  setOrder,
  setLanguage,
}) => {
  const snippetItems = snippets.map((snippet, mapIndex) => {
    return (
      <SnippetItemContainer
        key={snippet.id}
        snippet={snippet}
        userData={userData[mapIndex]}
      ></SnippetItemContainer>
    );
  });

  return (
    <>
      <Header />

      <S.ContentContainer>
        <S.ContentWarpper>
          <SortBarContainer
            setSnippets={setSnippets}
            setIsLoading={setIsLoading}
            setOrder={setOrder}
            setLanguage={setLanguage}
          />
          <S.MainContainer>{isLoading || snippetItems}</S.MainContainer>
        </S.ContentWarpper>
      </S.ContentContainer>
    </>
  );
};

export default SnippetList;
