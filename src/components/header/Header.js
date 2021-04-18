import React from 'react'
import * as S from "./style"



const Header = () => {
    return (
        <S.HeaderTemplate>
            <S.Logo onClick={() => {
                window.location.href = '/';
            }}/>
            <S.HeaderUserSection>
                <S.HeaderText>
                    NEW
                </S.HeaderText>
                <S.LoginButton> 
                    LOGIN
                </S.LoginButton>
            </S.HeaderUserSection>      
        </S.HeaderTemplate>
    );
};

export default Header;