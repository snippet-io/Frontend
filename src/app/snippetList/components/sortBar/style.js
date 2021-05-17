import styled from "styled-components";

export const SortBar = styled.ul`
  display: flex;
  justify-content: center;

  background-color: #f6f6f6;

  width: 50rem;

  padding: 0 0 0 0.4rem;
  border-radius: 4px;

  box-shadow: 0px 2px 0px 0px #a4a4a4;
`;

export const SortBarText = styled.li`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0.6rem 0 0.6rem;
  height: 2rem;

  font-size: 0.9rem;
  cursor: pointer;
`;

export const SortWrapper = styled.div`
  display: flex;

  margin-left: auto;
`;
