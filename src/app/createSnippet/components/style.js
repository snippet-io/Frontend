import styled from "styled-components";

export const SnippetSection = styled.div`
  display: flex;
  justify-content: center;

  width: 50rem;
  height: 40rem;
  background-color: #ffffff;
  border-radius: 1rem;

  box-sizing: border-box;
  margin-top: 4rem;
`;

export const SnippetInputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  box-sizing: border-box;

  margin-top: 4rem;
`;

export const SnippetTitle = styled.input`
  width: 16rem;
  height: 2rem;
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid black;
  &:focus {
    outline: 0;
  }
`;

export const SnippetDescription = styled.input`
  width: 100%;
  height: 2rem;

  box-sizing: border-box;
  padding: 1rem;

  border: 1px solid black;
  margin-top: 1rem;

  &:focus {
    outline: 0;
  }
`;

export const SnippetCodeSection = styled.div`
  width: 100%;
  border: 1px solid black;
  background-color: #ffffff;
  box-sizing: border-box;
`;

export const SnippetCotainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const SnippetAddButton = styled.button`
  height: 2rem;
  width: 4.5rem;
  margin-left: auto;
`;

export const SnippetCodeText = styled.input`
  border: 0;

  &:focus {
    outline: none;
  }
`;

export const SnippetCodeLineNumber = styled.span`
  &:before {
    position: absolute;
    right: 100%;
    margin-right: 10px;
    text-align: right;
    opacity: 0.3;
    user-select: none;
    counter-increment: line;
    content: counter(line);
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  height: 2rem;
  margin-bottom: 1rem;
`;

export const LangDropdownSelect = styled.select`
  &:focus {
    outline: 0;
  }
  margin-left: auto;

  width: 4rem;
`;

export const LangDropdownOption = styled.option`
  height: 10rem;
`;
