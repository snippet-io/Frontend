import * as S from "./style";
import React, { useState } from "react";

const SortBar = ({ languages }) => {
  const [selected, setSelected] = useState("All");

  const onSelect = (language) => {
    setSelected(language);
  };

  const languageItems = Object.keys(languages).map((language) => {
    return (
      <SortBarItem
        isSelected={selected === language}
        key={language}
        language={language}
        onSelect={onSelect}
      />
    );
  });

  return (
    <>
      <S.SortBar>
        {languageItems}
        <S.SortWrapper>
          <S.SortBarText>DATE</S.SortBarText>
          <S.SortBarText>STAR</S.SortBarText>
        </S.SortWrapper>
      </S.SortBar>
    </>
  );
};

const SortBarItem = (props) => {
  return (
    <S.SortBarText
      isSelected={props.isSelected}
      name={props.language}
      onClick={() => {
        props.onSelect(props.language);
      }}
    >
      {props.language}
    </S.SortBarText>
  );
};

export default SortBar;
