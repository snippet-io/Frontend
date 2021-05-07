import styled from "styled-components";

export const SnippetDetailWrapper = styled.div`
    margin: 62px auto 0 auto;
    padding: 0;
    width: 1086px;
`;

export const SnippetHeader = styled.div`
    margin: 0;
    padding: 0;
`;
export const Title = styled.h1`
    margin: 0;
    font-family: Lato;
    font-size: 3.125rem;
    display: inline-block;

    margin-right: 23px;
`;
export const Language = styled.div`
    box-sizing: border-box;
    display: inline-block;
    border: 1px solid #707070;
    border-radius: 10px;
    width: 69px;
    height: 31px;
    vertical-align: top;
    margin-top: 20px;

    justify-content: center;
    font-size: 1.25rem;
    text-align: center;
`;

export const SnippetMetaData = styled.div`
    margin: 0;
`;
export const Author = styled.div`
    display: inline-block;
    margin-right: 7px;
`;
export const CreatedTime = styled.div`
    display: inline-block;
    margin-left: 7px;
`;

export const SnippetDescription = styled.div`
    margin-top: 30px;
    font-family: Lato;
`;