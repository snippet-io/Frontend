import styled from "styled-components";

export const SnippetSection = styled.section`
  width: 60rem;
  height: 30rem;
  background-color: #ffffff;
  border-radius: 1rem;

  box-sizing: border-box;
`;

export const SnippetInputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  box-sizing: border-box;
`;

export const SnippetDescription = styled.input`
  border-radius: 0.5714rem;
  width: 100%;
  height: 2rem;

  box-sizing: border-box;
  padding: 1rem;

  border: 1px solid #a9a8aa;
  margin-top: 1rem;

  &:focus {
    outline: 0;
  }
`;

export const SnippetCodeSection = styled.div`
  border-radius: 0.5714rem;
  width: 100%;
  border: 1px solid #a9a8aa;
  background-color: #ffffff;
  box-sizing: border-box;
`;

export const SnippetCotainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const SnippetButton = styled.button`
  height: 2rem;
  width: 4.5rem;

  background-color: #02475e;
  color: #ffffff;

  border: 0px;
  border-radius: 1rem;
  cursor: pointer;

  margin-top: 1rem;
  margin-left: auto;

  &:hover {
    background-color: #01262e;
  }
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

export const SnippetTitle = styled.input`
  border-radius: 0.5714rem;

  width: 16rem;
  height: 2rem;
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid #a9a8aa;

  &:focus {
    outline: 0;
  }
`;

export const LangDropdownSelect = styled.select`
  &:focus {
    outline: 0;
  }
  margin-left: auto;
  border: 1px solid #a9a8aa;

  width: 5rem;
`;

export const LangDropdownOption = styled.option`
  height: 10rem;
`;
