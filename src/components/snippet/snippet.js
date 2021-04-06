import React from 'react'
import axios from 'axios'
import Header from "./../header/Header"
import * as S from "./style"
import * as B from "./../style"


const SnippetPage = () => {
    // const redirectOAuthURL = async () => {
    //     return await axios.get(
    //         `${process.env.REACT_APP_API_BASE_URL}/auth/github/login?redirect=${process.env.REACT_APP_URL}/github/OAuth`
    //     );
    // }

    return (
        <B.BaseCotainer>
            <Header/>
            <B.BaseTemplate></B.BaseTemplate>
        </B.BaseCotainer>
    );
};

export default SnippetPage;