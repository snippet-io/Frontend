import Header from "app/header/container/headerContainer";
import * as S from "./style";
import React from "react";

const SnippetList = () => {
  return (
    <div>
      <Header />

      <S.ContentContainer>
        <S.ContentWarpper>
          <S.MainContainer></S.MainContainer>
        </S.ContentWarpper>
      </S.ContentContainer>
    </div>
  );
};

export default SnippetList;
