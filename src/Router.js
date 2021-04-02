import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/login/Login';
import GetAccessToken from './components/login/OAuth';


const App = () => {
  return (
    <div>
      <Route path="/login" component={Login} />
      <Route path="/github/OAuth" component={GetAccessToken}/>
    </div>
  );
};

export default App;