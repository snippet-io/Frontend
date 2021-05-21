import { useState } from "react";
import CreateSnippet from "../components/createSnippet/createSnippet";
import { postCreateSnippetAPI } from "lib/api";

const CreateSnippetContainer = ({ history }) => {
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

  const postingSnippet = (data) => {
    postCreateSnippetAPI(data)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch(() => {
        alert("코드 생성 에러");
      });
  };

  return (
    <CreateSnippet
      inputs={inputs}
      setInputs={setInputs}
      onChangeInput={onChangeInput}
      postingSnippet={postingSnippet}
    ></CreateSnippet>
  );
};

export default CreateSnippetContainer;
