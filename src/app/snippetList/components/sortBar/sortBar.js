import * as S from "./style";
import React from "react";

const SortBar = ({ languages }) => {
  const languageItems = Object.keys(languages).map((language) => {
    return <S.SortBarText>{language}</S.SortBarText>;
  });

  return (
    <>
      <S.SortBar>
        <S.SortBarText>All</S.SortBarText>
        {languageItems}
        <S.SortBarText>etc</S.SortBarText>
        <S.SortWrapper>
          <S.SortBarText>DATE</S.SortBarText>
          <S.SortBarText>STAR</S.SortBarText>
        </S.SortWrapper>
      </S.SortBar>
    </>
  );
};

export default SortBar;
