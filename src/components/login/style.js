import loginArticle from './../../static/loginTemplate.png'
import styled from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>
export const LoginTemplate = styled.div`
    display: flex;
    background: linear-gradient(#000d18, #072136, #0f2b43, #2b3d4d);
    width: 100%;
    height: 100%;

    justify-content: center;
`;
export const BaseCotainer = styled.div`
    height: 100vh;
    weight: 100vw;
    overflow: hidden;
`;

export const LoginImg = styled.img.attrs({
        src: loginArticle
    })`
    
    height: 26rem;
    width: auto;

    border-radius: 0.5rem 0px 0px 0.5rem;
`;

export const LoginSection = styled.section`
    display: flex;

    height: 100%;
    width: 50rem;

    justify-content: center;
    align-items: center;
`;

export const LoginArticle = styled.article`
    display: flex;
    width: 100%;
    border-radius: 0.5rem;
`;

export const OAuthLoginButton = styled.button`
    height: 3rem;
    width: 18rem;
    color: white;
    background-color: #4d4d4d;
    border: 0;
    outline: none;
    font-size: 1.1rem;

    cursor: pointer;

    margin-bottom: 3rem;
    &:hover {
        background: #020202;
    }

    font-family: 'Roboto', sans-serif;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 26rem;
    background-color: #ffffff;

    border-radius: 0px 0.5rem 0.5rem 0px;
    justify-content: flex-end;
    align-items: center;
`;

export const LoginText = styled.p`
    color: #1b265b;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin 0;
`;

export const LoginDescription = styled.div`
    margin-bottom: 6rem;

    & ${LoginText}:nth-child(1) {
        font-size: 2.74rem;
    }
`;
