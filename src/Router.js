import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "app/header/container/headerContainer";
import LoginContainer from "app/login/container/loginContaienr";
import OAuthContainer from "app/login/container/oauthContainer";
import SnippetListContainer from "app/snippetList/container/snippetListContainer";
import CreateSnippet from "app/createSnippet/components/createSnippet";
import SnippetDetailContainer from "app/snippetDetail/container/snippetDetailContainer";
import EditSnippetContainer from "app/editSnippet/container/editSnippetContainer";

const App = () => {
  return (
    <div>
      <Route path="/new" component={CreateSnippet} />
      <Route path="/header" component={HeaderContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/github/OAuth" component={OAuthContainer} />
      <Route exact path="/" component={SnippetListContainer} />
      <Route path="/codes/:snippetId" component={SnippetDetailContainer} />
      <Route path="/codes/:snippetId/edit" component={EditSnippetContainer} />
    </div>
  );
};

export default App;
