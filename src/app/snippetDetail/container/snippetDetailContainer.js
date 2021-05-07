import SnippetDetail from "../components/snippetDetail";
import languages from "lib/languages";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCodeAPI, getUserAPI } from "lib/api";

const SnippetDetailContainer = () => {
  const { snippetId } = useParams();

  const [snippet, setSnippet] = useState();
  useEffect(() => {
    (async () => {
      const snippetData = await getCodeAPI(snippetId);
      const authorData = await getUserAPI(snippetData.data.author);
      const snippet = {
        id: snippetData.data.id,
        title: snippetData.data.title,
        code: snippetData.data.content,
        author: authorData.data.name,
        language: languages[snippetData.data.language],
        desciption: snippetData.data.description,
        createdDateTime: new Date(snippetData.data.created_datetime),
      };
      setSnippet(snippet);
    })();
  }, [snippetId]);
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
