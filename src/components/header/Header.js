import React from 'react'
import * as S from "./style"



const Header = () => {
    return (
        <S.HeaderTemplate>
            <S.Logo/>
            <S.LoginButton>
                LOGIN
            </S.LoginButton>
        </S.HeaderTemplate>
    );
};

export default Header;