import React from 'react'
import { useHistory } from 'react-router';
import * as S from "../style"


const NewButton = () => {
    const history = useHistory();

    return (
        <S.HeaderButton onClick={() => {
            history.push('/code');
        }}>
            New
        </S.HeaderButton>
    );
};

export default NewButton;