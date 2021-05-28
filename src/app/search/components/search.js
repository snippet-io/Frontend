import Header from "app/header/components/header";
import searchArticle from "static/searchArticle.png";
import readdingGlassIcon from "static/magnifyingGlass.svg";
import * as S from "./style";

const Search = () => {
  return (
    <>
      <Header />

      <S.PageWrapper>
        <S.PageSection>
          <S.SearchArticleImg src={searchArticle} />
          <S.SearchBarWarpper>
            <S.SearchInput placeholder="검색어를 입력하세요" />
            <S.ReaddingGlassIcon src={readdingGlassIcon} />
          </S.SearchBarWarpper>
        </S.PageSection>
      </S.PageWrapper>
    </>
  );
};

export default Search;
