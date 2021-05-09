import { useState } from "react";
import CreateSnippet from "../components/createSnippet";

const CreateSnippetContainer = () => {
  const [inputs, setInputs] = useState({
    title: "",
    language: "py",
    description: "",
    code: "def add(a, b):\n   return a + b",
  });

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <CreateSnippet
      inputs={inputs}
      setInputs={setInputs}
      onChangeInput={onChangeInput}
    ></CreateSnippet>
  );
};

export default CreateSnippetContainer;
