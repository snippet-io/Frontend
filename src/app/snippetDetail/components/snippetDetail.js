import Header from "app/header/components/header";
import SnippetHeader from "./snippetHeader";


const SnippetDetail = () => {

    const code = {
        title: "Title",
        language: "JS",
        author: "손정우",
        createdDateTime: new Date()
    };

    return (
    <>
        <Header />
        <SnippetHeader code={code} />
    </>);
};

export default SnippetDetail;