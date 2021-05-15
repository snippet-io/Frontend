import React from "react";
import * as S from "./style";

const SnippetItem = ({
  title,
  content,
  description,
  created_datetime,
  author,
}) => {
  return (
    <>
      <S.SnippetItemWarpper>
        <S.FrontWarpper>
          <S.HeaderWarpper>
            <S.ProfileImg />
            <S.HeaderContentWarpper>
              <S.UserName>이름이에요</S.UserName>
              <S.Title>
                제목을 달아요<S.Language>JS</S.Language>
              </S.Title>
            </S.HeaderContentWarpper>
          </S.HeaderWarpper>
          <S.Description>설명을 달아요</S.Description>
        </S.FrontWarpper>

        <S.FooterWarpper>
          <S.Star />
          <S.Datetime>Created 10 minutes ago</S.Datetime>
        </S.FooterWarpper>
      </S.SnippetItemWarpper>
      {/* <h1>{title}</h1>
      <p>{content}</p>
      <p>{description}</p>
      <p>{created_datetime}</p>

      <div>{author}</div> */}
    </>
  );
};

export default SnippetItem;
