import { useState, useEffect } from "react";

import Login from "../components/login";
import { getOAuthUrlAPI } from "lib/api";

const LoginContainer = () => {
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    getOAuthUrlAPI().then((res) => {
      setRedirectUrl(res.data.redirect_url);
    });
  }, []);

  const githubOAuthLogin = () => {
    window.location.href = redirectUrl;
  };

  return <Login githubOAuthLogin={githubOAuthLogin} />;
};

export default LoginContainer;
