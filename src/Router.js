import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "app/header/container/headerContainer";
import LoginContainer from "app/login/container/loginContaienr";
import OAuthContainer from "app/login/container/oauthContainer";
import SnippetListContainer from "app/snippetList/container/snippetListContainer";
import CreateSnippetContainer from "app/snippet/containter/createSnippetContainer";
import SnippetDetailContainer from "app/snippetDetail/container/snippetDetailContainer";
import EditSnippetContainer from "app/snippet/containter/editSnippetContainer";

const App = () => {
  return (
    <div>
      <Route path="/new" component={CreateSnippetContainer} />
      <Route path="/header" component={HeaderContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/github/OAuth" component={OAuthContainer} />
      <Route exact path="/" component={SnippetListContainer} />
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
    </div>
  );
};

export default App;
