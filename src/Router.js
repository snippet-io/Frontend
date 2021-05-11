import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "app/header/container/headerContainer";
import LoginContainer from "app/login/container/loginContaienr";
import OAuthContainer from "app/login/container/oauthContainer";
import SnippetListContainer from "app/snippetList/container/snippetListContainer";
import CreateSnippetContainer from "app/snippet/containter/createSnippetContainer";
import SnippetDetailContainer from "app/snippetDetail/container/snippetDetailContainer";
import NotFoundContainer from "app/error/notFound/container/notFoundContainer";

const App = () => {
  return (
    <>
      <Route path="/new" component={CreateSnippetContainer} />
      <Route path="/header" component={HeaderContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/github/OAuth" component={OAuthContainer} />
      <Route exact path="/" component={SnippetListContainer} />
      <Route path="/codes/:snippetId" component={SnippetDetailContainer} />
      <Route path="/404" component={NotFoundContainer} />
    </>
  );
};

export default App;
