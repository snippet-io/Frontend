import SnippetDescription from "./snippetDescription";
import Header from "app/header/components/header";
import SnippetHeader from "./snippetHeader";


const SnippetDetail = () => {

    const snippet = {
        title: "Title",
        language: "JS",
        author: "손정우",
        createdDateTime: new Date(),
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
                      book`
    };

    return (
    <>
        <Header />
        <SnippetHeader snippet={snippet} />
        <SnippetDescription description={snippet.description}/>
    </>);
};

export default SnippetDetail;