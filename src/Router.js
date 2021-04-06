import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/login/Login';
import GetAccessToken from './components/login/OAuth';
import SnippetPage from './components/snippet/snippet'


const App = () => {
  return (
    <div>
      <Route path="/login" component={LoginPage} />
      <Route path="/github/OAuth" component={GetAccessToken}/>
      <Route path="/code" component={SnippetPage}/>    
    </div>
  );
};

export default App;