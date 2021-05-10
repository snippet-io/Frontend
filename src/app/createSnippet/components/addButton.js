import * as S from "./style";

const SnippetAddButton = ({ postingSnippet, inputs }) => {
  return (
    <S.SnippetButton
      onClick={() => {
        postingSnippet(inputs);
      }}
    >
      ADD
    </S.SnippetButton>
  );
};

export default SnippetAddButton;
