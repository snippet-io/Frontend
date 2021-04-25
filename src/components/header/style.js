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

export const HeaderButton = styled.a`
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;
`;

export const Logo = styled.img.attrs({
    src: logoImg
})`
    width: 5.75rem;
    margin-left: 1rem;
`;

export const HeaderUserSection = styled.div`
    display: flex;
    margin-left: auto;
`;

export const HeaderText = styled.a`
    text-decoration: none;
    margin-left: auto;
    color: #ffffff;
`;