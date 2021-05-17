import React from "react";
import * as S from "./style";

const SnippetItem = ({
  title,
  description,
  created_datetime,
  author,
  language,
  starCount,
}) => {
  return (
    <>
      <S.SnippetItemWarpper>
        <S.FrontWarpper>
          <S.HeaderWarpper>
            <S.ProfileImg />
            <S.HeaderContentWarpper>
              <S.UserName>{author}</S.UserName>
              <S.Title>
                {title}
                <S.Language>{language}</S.Language>
              </S.Title>
            </S.HeaderContentWarpper>
          </S.HeaderWarpper>
          <S.Description>{description}</S.Description>
        </S.FrontWarpper>

        <S.FooterWarpper>
          <S.StarWapper>
            <S.Star />
            <S.StarCount>{starCount}</S.StarCount>
          </S.StarWapper>
          <S.Datetime>{created_datetime}</S.Datetime>
        </S.FooterWarpper>
      </S.SnippetItemWarpper>
    </>
  );
};

export default SnippetItem;
