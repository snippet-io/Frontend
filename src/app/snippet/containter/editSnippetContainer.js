import { useState, useEffect } from "react";
import EditSnippet from "../components/editSnippet/editSnippet";
import { modifySnippetAPI, getCodeAPI } from "lib/api";
import { useParams } from "react-router";
import languageList from "lib/languages";

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
        setSelectedLanguage(languageList[snippet.language].getFullName());
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

  const snippetState = {
    ...snippet,
    setSnippet,
  };

  const languages = Object.keys(languageList);
  const [selectedLanguage, setSelectedLanguage] = useState("c");

  return (
    <EditSnippet
      languages={languages}
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
      snippetState={snippetState}
      onChangeInput={onChangeInput}
      modifySnippet={modifySnippet}
    ></EditSnippet>
  );
};

export default EditSnippetContainer;
