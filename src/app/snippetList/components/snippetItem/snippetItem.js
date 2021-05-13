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
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{description}</p>
      <p>{created_datetime}</p>

      <div>{author}</div>
    </>
  );
};

export default SnippetItem;
