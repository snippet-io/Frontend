import Header from "app/header/components/header";
import * as S from "./style";

const Login = ({ githubOAuthLogin }) => {
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

            <S.OAuthLoginButton onClick={githubOAuthLogin}>
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
