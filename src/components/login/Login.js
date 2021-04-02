import React, { useEffect } from 'react'
import axios from 'axios'
import Header from "./../header/Header"
import * as S from "./style"


const Login = () => {
    const redirectOAuthURL = async () => {
        return await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/auth/github/login?redirect=${process.env.REACT_APP_URL}/github/OAuth`
        );
    }

    return (
        <S.BaseCotainer>
            <Header />

            <S.LoginTemplate>
                <S.LoginSection>
                    <S.LoginArticle>
                    <S.LoginImg />
                    <S.LoginContainer>
                        <S.LoginDescription>
                            <S.LoginText>Save and Find</S.LoginText>
                            <S.LoginText>code, notes, and snippets.</S.LoginText>
                        </S.LoginDescription>
                        
                        <S.OAuthLoginButton onClick={ async () => {
                            const { data } = await redirectOAuthURL();
                            window.location.href = data;
                        }}> 
                            Login with Github
                        </S.OAuthLoginButton>

                    </S.LoginContainer>
                </S.LoginArticle>
                </S.LoginSection>
            </S.LoginTemplate>
        </S.BaseCotainer>
    );
};

export default Login;