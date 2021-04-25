import React from 'react'
import * as S from "../style"
import Logo from '../component/logo.js'
import LoginButton from '../component/loginButton.js'
import NewButton from '../component/newButton.js'


const Header = () => {

    return (
        <S.HeaderTemplate>
            <Logo/>
            <S.HeaderUserSection>
                <S.HeaderText>
                    <NewButton/>
                </S.HeaderText>
                <S.HeaderText>
                    <LoginButton/>
                </S.HeaderText>
            </S.HeaderUserSection>      
        </S.HeaderTemplate>
    );
};

export default Header;