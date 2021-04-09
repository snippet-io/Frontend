import styled from "styled-components";


export const SnippetInputsContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 50rem;
    height: 100rem;
    
    box-sizing: border-box;
    border: 1px solid black;
`;

export const SnippetTitle = styled.input`
    width: 24rem;
    height: 2rem;
    box-sizing:border-box;
    &:focus {
        outline: 0;
    }
`;

export const SnippetDescription = styled.input`
    width: 100%;
    height: 2rem;
    box-sizing: border-box;
    &:focus {
        outline: 0;
    }
`;

export const SnippetCodeSection = styled.section`
    width: 100%;
    background-color: #ffffff;
    box-sizing: border-box;
`;

export const SnippetCotainer = styled.div`
    display: flex;

    width: 100%;

    justify-content: center;
    align-items: center;
`;

export const SnippetAddButton = styled.button`
    height: 2rem;
    width: 4.5rem;
`;

export const SnippetCodeText = styled.input`
    border: 0;

    &:focus{outline:none;}
`;

export const SnippetCodeLineNumber = styled.span`
    &:before {
        position: absolute;
        right: 100%;
        margin-right: 10px;
        text-align: right;
        opacity: .3;
        user-select: none;
        counter-increment: line;
        content: counter(line);
    }
`;

export const HeadContainer = styled.div`
    display: flex;
`;

export const LangDropdownSelect = styled.select`
    width: 14rem;
    height: 100%;
`;

export const LangDropdownOption = styled.option`
    height: 10rem;
`;


<select>
    <option selected="" value="Default">Select Package</option>
    <option value="1">Kids Pass</option>
    <option value="2">Single Adult Pass</option>
    <option value="3">Couple Pass</option>
    <option value="4">Single Day Pass</option>
</select>
