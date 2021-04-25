import React from 'react'
import { useHistory } from 'react-router';
import * as S from "../style"


const Logo = () => {
    const history = useHistory();

    return (
        <S.Logo onClick={() => {
            history.push('/')
        }}/>
    );
};

export default Logo;