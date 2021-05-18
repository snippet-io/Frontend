import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderContainer from "app/header/container/headerContainer";
import LoginContainer from "app/login/container/loginContaienr";
import OAuthContainer from "app/login/container/oauthContainer";
import SnippetListContainer from "app/snippetList/container/snippetListContainer";
import CreateSnippetContainer from "app/snippet/containter/createSnippetContainer";
import SnippetDetailContainer from "app/snippetDetail/container/snippetDetailContainer";
import NotFoundContainer from "app/error/notFound/container/notFoundContainer";
import EditSnippetContainer from "app/snippet/containter/editSnippetContainer";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/new" component={CreateSnippetContainer} />
        <Route exact path="/header" component={HeaderContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/github/OAuth" component={OAuthContainer} />
        <Route exact path="/" component={SnippetListContainer} />
        <Route path="" component={NotFoundContainer} />
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
      </Switch>
    </>
  );
};

export default App;
