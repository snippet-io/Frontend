import SnippetListContainer from "app/snippetList/container/snippetListContainer";
import InputContainer from "app/search/container/InputContainer";
import * as S from "./style";

const AfterSearch = ({ keyword, setKeyword }) => {
  return (
    <>
      <S.PageWarpper>
        <S.ContentWarpper>
          <InputContainer keyword={keyword} setKeyword={setKeyword} />
          <SnippetListContainer searchKeyword={keyword} />
        </S.ContentWarpper>
      </S.PageWarpper>
    </>
  );
};

export default AfterSearch;
