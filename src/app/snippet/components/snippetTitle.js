import * as S from "./style";

const SnippetTitle = ({ title, onChangeInput }) => {
  return (
    <S.SnippetTitle
      type="text"
      placeholder="snippet title"
      name="title"
      value={title}
      onChange={onChangeInput}
    />
  );
};

export default SnippetTitle;
