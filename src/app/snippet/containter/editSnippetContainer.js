import { useState } from "react";
import EditSnippet from "../components/editSnippet/editSnippet";

const EditSnippetContainer = () => {
  const [snippet, setSnippet] = useState({
    title: "title",
    code: "code",
    language: "python",
    description: "description",
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
  return (
    <EditSnippet
      snippetState={snippetState}
      onChangeInput={onChangeInput}
    ></EditSnippet>
  );
};

export default EditSnippetContainer;
