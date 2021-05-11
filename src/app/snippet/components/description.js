import * as S from "./style";

const Description = ({ description, onChangeInput }) => {
  return (
    <S.SnippetDescription
      type="text"
      name="description"
      placeholder="snippet description..."
      value={description}
      onChange={onChangeInput}
    />
  );
};

export default Description;
