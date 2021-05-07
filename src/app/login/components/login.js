import React, { useEffect, useState } from "react";
import Header from "app/header/components/header";
import * as S from "./style";

import { getOAuthUrlAPI } from "lib/api";

const Login = ({ gotoURL }) => {
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    getOAuthUrlAPI().then((res) => {
      setRedirectUrl(res.data.redirect_url);
    });
  });

  return (
    <S.LoginCotainer>
      <Header />
      <S.LoginTemplate>
        <S.LoginArticle>
          <S.LoginImg />
          <S.LoginContainer>
            <S.LoginDescription>
              <S.LoginText>Save and Find</S.LoginText>
              <S.LoginText>code, notes, and snippets.</S.LoginText>
            </S.LoginDescription>

            <S.OAuthLoginButton
              onClick={() => {
                gotoURL(redirectUrl);
              }}
            >
              <S.GithubLoginAsset />
              Login with Github
            </S.OAuthLoginButton>
          </S.LoginContainer>
        </S.LoginArticle>
      </S.LoginTemplate>
    </S.LoginCotainer>
  );
};

export default Login;
