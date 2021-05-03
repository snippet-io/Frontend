import Language from "./language";
import SnippetMetaData from "./snippetMetaData";
import * as S from "./style";

const SnippetHeader = () => {
    return (
        <div>
            <S.Title>Title</S.Title>
            <Language />
            <SnippetMetaData />
        </div>
    );
};

export default SnippetHeader;