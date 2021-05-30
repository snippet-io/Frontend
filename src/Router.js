import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "app/pages/login";
import OAuthContainer from "app/login/container/oauthContainer";
import MainPage from "app/pages/snippetList";
import CreateSnippetContainer from "app/snippet/containter/createSnippetContainer";
import SnippetDetailContainer from "app/snippetDetail/container/snippetDetailContainer";
import NotFoundContainer from "app/error/notFound/container/notFoundContainer";
import EditSnippetContainer from "app/snippet/containter/editSnippetContainer";
import SearchContainer from "app/search/container/searchContainer";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/new" component={CreateSnippetContainer} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/github/OAuth" component={OAuthContainer} />
        <Route exact path="/" component={MainPage} />

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

        <Route exact path="/search" component={SearchContainer} />
        <Route path="*" component={NotFoundContainer} />
      </Switch>
    </>
  );
};

export default App;
