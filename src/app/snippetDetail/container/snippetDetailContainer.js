import SnippetDetail from "../components/snippetDetail";
import languages from "lib/languages";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {} from "lib/api";

const SnippetDetailContainer = () => {
  const { snippetId } = useParams();

  // const [snippet, setSnippet] = useState();
  // useEffect(() => {

  // });

  // console.log(snippetId);
  const snippet = {
    title: "Title",
    language: languages["javascript"],
    author: "손정우",
    createdDateTime: new Date(),
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
                      book`,
    code: `function sum(a, b) {
            return a + b;
        }`,
  };
  const isUserAuthor = true;
  return (
    <SnippetDetail
      snippet={snippet}
      isUserAuthor={isUserAuthor}
      urlGoingToBackTheList="/"
      urlGoingEdit="/edit"
    ></SnippetDetail>
  );
};

export default SnippetDetailContainer;
