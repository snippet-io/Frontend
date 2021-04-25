import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/login/page/login';
// import GetAccessToken from './components/login/oauth';
// import SnippetPage from './components/snippet/snippet'
// import SnippetsPage from './components/snippets/snippets';


const App = () => {
  return (
    <div>
      {/* <Route exact path="/" component={SnippetsPage} /> */}
      <Route path="/login" component={LoginPage} />
      {/* <Route path="/github/OAuth" component={GetAccessToken}/>
      <Route path="/code" component={SnippetPage}/> */}
    </div>
  );
};

export default App;