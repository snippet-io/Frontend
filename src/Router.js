import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "app/header/container/headerContainer";
import LoginContainer from "app/login/container/loginContaienr";
import OAuthContainer from "app/login/container/oauthContainer";
import SnippetListContainer from "app/snippetList/container/snippetListContainer";

const App = () => {
  return (
    <div>
      <Route path="/header" component={HeaderContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/github/OAuth" component={OAuthContainer} />
      <Route exact path="/" component={SnippetListContainer} />
    </div>
  );
};

export default App;
