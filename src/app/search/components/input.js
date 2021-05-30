import * as S from "./style";

const Input = ({ keyword, setKeyword }) => {
  return (
    <>
      <S.SearchBarWarpper>
        <S.SearchInput
          placeholder="검색어를 입력하세요"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </S.SearchBarWarpper>
    </>
  );
};

export default Input;
