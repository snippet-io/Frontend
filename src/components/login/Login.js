import React from 'react'
import axios from 'axios'
import Header from "./../header/Header"
import * as B from "./../style"
import * as S from "./style"


const LoginPage = () => {
    const redirectOAuthURL = async () => {
        return await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/auth/github/login?redirect=${process.env.REACT_APP_URL}/github/OAuth`
        );
    }

    return (
        <S.LoginCotainer>
            <Header />
                <B.BaseBackground>
                <S.LoginTemplate>
                    <S.LoginSection>
                        <S.LoginArticle>
                            <S.LoginImg />
                            <S.LoginContainer>
                                <S.LoginDescription>
                                    <S.LoginText>Save and Find</S.LoginText>
                                    <S.LoginText>code, notes, and snippets.</S.LoginText>
                                </S.LoginDescription>

                                <S.OAuthLoginButton onClick={async () => {
                                    const res = await redirectOAuthURL();
                                    console.log(res.data.redirect_url);
                                    window.location.href = res.data.redirect_url;
                                }}>
                                    <S.GithubLoginAsset/>
                                    Login with Github
                            </S.OAuthLoginButton>

                            </S.LoginContainer>
                        </S.LoginArticle>
                    </S.LoginSection>
                </S.LoginTemplate>
                </B.BaseBackground>
        </S.LoginCotainer>
    );
};

export default LoginPage;