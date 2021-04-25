import React from 'react'
import { useHistory } from 'react-router';
import * as S from "../style"


const LoginButton = () => {
    const history = useHistory();

    return (
        <S.HeaderButton onClick={() => {
            history.push('/login');
        }}>
            Login
        </S.HeaderButton>
    );
};

export default LoginButton;