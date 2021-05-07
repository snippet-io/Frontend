import Language from "./language";
import SnippetMetaData from "./snippetMetaData";
import * as S from "./style";

const SnippetHeader = ({ snippet }) => {
  return (
    <div>
      <S.Title>{snippet.title}</S.Title>
      <S.Language>{snippet.language.getAbbreviatedName()}</S.Language>
      <SnippetMetaData
        author={snippet.author}
        createdTime={snippet.createdDateTime}
      />
    </div>
  );
};

export default SnippetHeader;
