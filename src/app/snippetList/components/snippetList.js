import React, { useEffect, useState } from "react";
import Header from "app/header/container/headerContainer";
import * as S from "./style";
import { getSnippetList } from "lib/api";
import List from "@material-ui/core/List";

const SnippetList = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    getSnippetList(0, 10).then((res) => {
      console.log(res.data);
      setSnippets(res.data);
    });
  }, []);

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
