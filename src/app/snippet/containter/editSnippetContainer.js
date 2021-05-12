import { useState, useEffect } from "react";
import EditSnippet from "../components/editSnippet/editSnippet";
import { modifySnippetAPI, getCodeAPI } from "lib/api";
import { useParams } from "react-router";

const EditSnippetContainer = ({ history }) => {
  const [snippet, setSnippet] = useState({
    title: "",
    code: "",
    language: "",
    description: "",
  });
  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setSnippet({
      ...snippet,
      [name]: value,
    });
  };
  const snippetState = {
    ...snippet,
    setSnippet,
  };
  const { snippetId } = useParams();
  const [initialSnippet, setInitialSnippet] = useState();
  useEffect(
    () =>
      (async () => {
        const snippetData = await getCodeAPI(snippetId);
        const snippet = {
          title: snippetData.data.title,
          language: snippetData.data.language,
          code: snippetData.data.content,
          description: snippetData.data.description,
        };
        setSnippet(snippet);
        setInitialSnippet(snippet);
      })(),
    [snippetId]
  );

  const modifySnippet = () => {
    if (Object.is(snippet, initialSnippet)) {
      history.push("/");
      return;
    }
    modifySnippetAPI(snippetId, snippet)
      .then((res) => {
        history.push("/");
      })
      .catch((e) => {
        console.log(e);
        alert("수정 에러");
      });
  };

  return (
    <EditSnippet
      snippetState={snippetState}
      onChangeInput={onChangeInput}
      modifySnippet={modifySnippet}
    ></EditSnippet>
  );
};

export default EditSnippetContainer;
