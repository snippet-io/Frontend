import SnippetDescription from "./snippetDescription";
import Header from "app/header/components/header";
import SnippetHeader from "./snippetHeader";


const SnippetDetail = () => {

    const snippet = {
        title: "Title",
        language: "JS",
        author: "손정우",
        createdDateTime: new Date()
    };

    return (
    <>
        <Header />
        <SnippetHeader snippet={snippet} />
    </>);
};

export default SnippetDetail;