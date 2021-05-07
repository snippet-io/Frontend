import Author from "./author";
import CreatedTime from "./createdTime";
import * as S from "./style";

const SnippetMetaData = ({ author, createdTime }) => {
  return (
    <S.SnippetMetaData>
      <Author author={author} />
      -
      <CreatedTime createdTime={createdTime} />
    </S.SnippetMetaData>
  );
};

export default SnippetMetaData;
