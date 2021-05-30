import Input from "../components/input";

const InputContainer = ({ keyword, setKeyword }) => {
  return (
    <>
      <Input setKeyword={setKeyword} keyword={keyword} />
    </>
  );
};

export default InputContainer;
