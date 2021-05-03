import Language from "./language";
import SnippetMetaData from "./snippetMetaData";
import Title from "./title";

const SnippetHeader = () => {
    return (
        <div>
            <Title />
            <Language />
            <SnippetMetaData />
        </div>
    );
};

export default SnippetHeader;