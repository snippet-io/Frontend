import styled from "styled-components";

export const SearchArticleImg = styled.img`
  height: 18rem;
  width: auto;
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;

  height: 90vh;
  width: 100vw;

  overflow: hidden;
`;

export const PageSection = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const SearchBarWarpper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  border: 0.1rem solid #223232;
  border-radius: 1rem;
  margin: 1rem 0 0 0;
  padding: 0 0.7rem 0 0;
`;

export const SearchInput = styled.input`
  height: 2rem;
  width: 100%;

  border: 0;
  border-radius: 100px;
  padding: 0.01rem 1rem 0.01rem 1rem;

  &:focus {
    outline: none;
  }
`;

export const ReaddingGlassIcon = styled.img`
  height: 1.2rem;

  cursor: pointer;
`;

export const PageWarpper = styled.div`
  display: flex;
  justify-content: center;

  margin: 3rem 0 3rem 0;
  padding: 2rem;
`;

export const ContentWarpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50rem;
`;
