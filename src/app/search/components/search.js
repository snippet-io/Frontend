import searchArticle from "static/searchArticle.png";
import readdingGlassIcon from "static/magnifyingGlass.svg";
import * as S from "./style";

const Search = ({ onSearch, keyword, setKeyword }) => {
  return (
    <>
      <S.PageWrapper>
        <S.PageSection>
          <S.SearchArticleImg src={searchArticle} />
          <S.SearchBarWarpper>
            <S.SearchInput
              placeholder="검색어를 입력하세요"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            <S.ReaddingGlassIcon
              src={readdingGlassIcon}
              onClick={(e) => {
                onSearch(keyword);
              }}
            />
          </S.SearchBarWarpper>
        </S.PageSection>
      </S.PageWrapper>
    </>
  );
};

export default Search;
