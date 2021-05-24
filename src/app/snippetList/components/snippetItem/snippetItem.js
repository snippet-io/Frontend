import React from "react";
import * as S from "./style";
import starImg from "static/star.svg";

const SnippetItem = ({
  title,
  description,
  created_datetime,
  author,
  profileImageURL,
  language,
  starCount,
  goDetail,
}) => {
  return (
    <>
      <S.SnippetItemWarpper>
        <S.FrontWarpper>
          <S.HeaderWarpper>
            <S.ProfileImg src={profileImageURL} />
            <S.HeaderContentWarpper>
              <S.UserName>{author}</S.UserName>
              <S.Title onClick={goDetail}>
                {title}
                <S.Language>{language}</S.Language>
              </S.Title>
            </S.HeaderContentWarpper>
          </S.HeaderWarpper>
          <S.Description>{description}</S.Description>
        </S.FrontWarpper>

        <S.FooterWarpper>
          <S.StarWapper>
            <S.Star src={starImg} />
            <S.StarCount>{starCount}</S.StarCount>
          </S.StarWapper>
          <S.Datetime>{created_datetime}</S.Datetime>
        </S.FooterWarpper>
      </S.SnippetItemWarpper>
    </>
  );
};

export default SnippetItem;
