import Header from "app/header/container/headerContainer";
import * as S from "./style";
import React, { useEffect, useState } from "react";

import SortBarContainer from "app/snippetList/container/sortBarContainer";
import SnippetItemContainer from "app/snippetList/container/snippetItemContainer";
import { getUserAPI } from "lib/api";

const SnippetList = ({ snippets }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const promiseArr =
      snippets.length &&
      snippets.map((snippet) => {
        const promise = new Promise((resolve, rejected) => {
          const res = getUserAPI(snippet.author);
          if (res) {
            resolve(res);
          } else {
            rejected();
          }
        });
        return promise;
      });

    // console.log(promiseArr);
    promiseArr &&
      Promise.all(promiseArr).then((res) => {
        console.log(res);
        setUserData(res);
        setIsLoading(false);
      });
  }, [snippets]);

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
          <SortBarContainer />
          <S.MainContainer>{isLoading || snippetItems}</S.MainContainer>
        </S.ContentWarpper>
      </S.ContentContainer>
    </>
  );
};

export default SnippetList;
