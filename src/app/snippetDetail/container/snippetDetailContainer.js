import SnippetDetail from "../components/snippetDetail";
import languages from "lib/languages";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCodeAPI, getUserAPI } from "lib/api";

const SnippetDetailContainer = () => {
  const { snippetId } = useParams();
  const [userId, setUserId] = useState();
  useEffect(() => {
    setUserId(parseInt(localStorage.getItem("id")));
  }, [userId]);

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
        authorId: snippetData.data.author,
        language: languages[snippetData.data.language],
        description: snippetData.data.description,
        createdDateTime: new Date(snippetData.data.created_datetime),
      };
      setSnippet(snippet);
    })();
  }, [snippetId]);
  const isUserAuthor = snippet?.authorId === userId;
  return (
    <SnippetDetail
      snippet={snippet}
      isUserAuthor={isUserAuthor}
      urlGoingToBackTheList="/"
      urlGoingEdit={`/codes/${snippetId}/edit`}
    ></SnippetDetail>
  );
};

export default SnippetDetailContainer;
