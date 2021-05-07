import SnippetDescription from "./snippetDescription";
import Header from "app/header/components/header";
import SnippetHeader from "./snippetHeader";
import * as S from "./style";
import SnippetCode from "./snippetCode";
import languages from "lib/languages";
import { Link } from "react-router-dom";
import SnippetDetailLink from "./SnippetDetailLink";

const SnippetDetail = ({snippet, isUserAuthor, urlGoingEdit, urlGoingToBackTheList}) => {

    snippet = {
        title: "Title",
        language: languages["javascript"],
        author: "손정우",
        createdDateTime: new Date(),
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
                      book`,
        code: `function sum(a, b) {
            return a + b;
        }`
    };
    isUserAuthor = true;
    return (
    <>
        <Header />
        <S.SnippetDetailWrapper>
            <SnippetHeader snippet={snippet} />
            <SnippetDescription description={snippet.description}/>
            <SnippetCode code={snippet.code} language={snippet.language}/>
            <S.LinksWrapper>
                {isUserAuthor && <SnippetDetailLink to={urlGoingEdit}>Edit</SnippetDetailLink>}
                <SnippetDetailLink to={urlGoingToBackTheList}>Back to the list</SnippetDetailLink>
            </S.LinksWrapper>
        </S.SnippetDetailWrapper>
    </>);
};

export default SnippetDetail;