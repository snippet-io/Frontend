import Language from "./language";
import SnippetMetaData from "./snippetMetaData";
import * as S from "./style";

const SnippetHeader = ({title, language, author, createdTime, code}) => {
    return (
        <div>
            <S.Title>{code.title}</S.Title>
            <S.Language>{code.language}</S.Language>
            <SnippetMetaData author={code.author} createdTime={code.createdDateTime}/>
        </div>
    );
};

export default SnippetHeader;