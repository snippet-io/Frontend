import SnippetDetail from "../components/snippetDetail";
import languages from "lib/languages";
import NotFoundContainer from "app/error/notFound/container/notFoundContainer";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCodeAPI, getUserAPI } from "lib/api";

const SnippetDetailContainer = () => {
  const history = useHistory();
  const { snippetId } = useParams();
  const [userId, setUserId] = useState();
  const [status, setStatus] = useState(200);

  useEffect(() => {
    setUserId(parseInt(localStorage.getItem("id")));
  }, [userId]);

  const [snippet, setSnippet] = useState();
  useEffect(() => {
    (async () => {
      try {
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
      } catch (err) {
        if (err.response.status === 404) {
          setStatus(404);
        }
      }
    })();
  }, [snippetId, history]);

  const isUserAuthor = snippet?.authorId === userId;

  if (status === 404) {
    return <NotFoundContainer />;
  }

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
