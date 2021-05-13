import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "app/header/container/headerContainer";
import LoginContainer from "app/login/container/loginContaienr";
import OAuthContainer from "app/login/container/oauthContainer";
import SnippetListContainer from "app/snippetList/container/snippetListContainer";
import CreateSnippetContainer from "app/snippet/containter/createSnippetContainer";
import SnippetDetailContainer from "app/snippetDetail/container/snippetDetailContainer";
import NotFoundContainer from "app/error/notFound/container/notFoundContainer";
import EditSnippetContainer from "app/snippet/containter/editSnippetContainer";

import SnippetItem from "app/snippetList/components/snippetItem/snippetItem";

const App = () => {
  return (
    <>
      <Route path="/test-item" component={SnippetItem} />

      <Route path="/new" component={CreateSnippetContainer} />
      <Route path="/header" component={HeaderContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/github/OAuth" component={OAuthContainer} />
      <Route exact path="/" component={SnippetListContainer} />
      <Route path="/404" component={NotFoundContainer} />
      <Route
        exact
        path="/codes/:snippetId"
        component={SnippetDetailContainer}
      />
      <Route
        exact
        path="/codes/:snippetId/edit"
        component={EditSnippetContainer}
      />
    </>
  );
};

export default App;
