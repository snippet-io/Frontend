import { memo } from "react";

import Header from "app/header/container/headerContainer";
import * as S from "./style";

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
  onStar,
  starred,
}) => {
  const snippetItems = snippets.map((snippet, mapIndex) => {
    return (
      <SnippetItemContainer
        key={snippet.id}
        snippet={snippet}
        userData={userData[mapIndex]}
        onStar={onStar}
        starred={starred}
      ></SnippetItemContainer>
    );
  });

  return (
    <>
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

export default memo(SnippetList);
