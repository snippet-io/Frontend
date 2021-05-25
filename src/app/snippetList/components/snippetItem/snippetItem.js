import React from "react";
import * as S from "./style";
import starImg from "static/star.svg";
import starredImg from "static/filledStar.svg";

const SnippetItem = ({
  title,
  description,
  created_datetime,
  author,
  profileImageURL,
  language,
  starCount,
  goDetail,
  onStar,
  starred,
  id,
}) => {
  const isStarred = (id) => {
    if (starred.includes(id)) {
      return true;
    }

    return false;
  };

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
            <S.Star
              src={isStarred(id) ? starImg : starredImg}
              onClick={() => {
                console.log(id);
                onStar(id);
              }}
            />
            <S.StarCount>{starCount}</S.StarCount>
          </S.StarWapper>
          <S.Datetime>{created_datetime}</S.Datetime>
        </S.FooterWarpper>
      </S.SnippetItemWarpper>
    </>
  );
};

export default SnippetItem;
