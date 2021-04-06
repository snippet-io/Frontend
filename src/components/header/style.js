import styled from "styled-components";
import logoImg from "./../../static/logo.png";


export const HeaderTemplate = styled.div`
    display: flex;
    background-color: #010101;
    width: 100%;
    height: 2rem;
    padding: 0.12rem;

    align-items: center;
`;

export const LoginButton = styled.a.attrs({
    href: process.env.REACT_APP_URL + "/login"
    })`
    display: flex;
    height: 100%;
    width: 5rem;
    color: #ffffff;
    text-decoration: none;

    margin-left: auto;
    margin-right: 0.3rem;
    cursor: pointer;

    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img.attrs({
    src: logoImg
})`
    width: 5.75rem;
    margin-left: 1rem;
`;
