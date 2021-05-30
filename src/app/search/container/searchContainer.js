import Search from "../components/search";
import HeaderContainer from "app/header/container/headerContainer";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import qs from "qs";
import AfterSearch from "../components/afterSearch";

const SearchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();
  const location = useLocation();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onSearch = (keyword) => {
    history.push(`/search?keyword=${keyword}`);
  };

  if (query.keyword) {
    return (
      <>
        <HeaderContainer />
        <AfterSearch keyword={keyword} setKeyword={setKeyword} />
      </>
    );
  } else {
    return (
      <>
        <HeaderContainer />
        <Search onSearch={onSearch} keyword={keyword} setKeyword={setKeyword} />
      </>
    );
  }
};

export default SearchContainer;
