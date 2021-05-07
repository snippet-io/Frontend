import Header from "app/header/container/headerContainer";
import * as S from "./style";
import List from "@material-ui/core/List";
import React from "react";

const SnippetList = () => {
  return (
    <div>
      <Header />
      <S.HeadContainer>
        <form noValidate autoComplete="off">
          <S.SearchBar
            label="검색어를 입력하세요"
            variant="outlined"
            id="outlined-basic"
          />
          <S.LargeSearchIcon fontSize="large" />
        </form>
      </S.HeadContainer>

      <S.MainContainer>
        <List></List>
      </S.MainContainer>
    </div>
  );
};

export default SnippetList;
