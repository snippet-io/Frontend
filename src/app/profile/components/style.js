import styled from "styled-components";

export const ProfileWarpper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 14rem;
  height: 30rem;

  margin: 9rem 2rem 0 0;
  padding: 2.143rem 2.786rem 2.143rem 2.786rem;

  border-radius: 10px;
  background-color: #f6f6f6;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const ProfileImg = styled.img`
  width: 14rem;
  height: 14rem;

  border-radius: 100rem;
`;

export const ProfileName = styled.p`
  display: flex;
  justify-content: center;

  font-size: 2rem;
  color: #000000;
`;

export const PageWarpper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 12rem;
`;

export const ListWarpper = styled.div`
  display: flex;
  flex-direction: column;

  width: 50rem;
`;

export const ProfileAWarpper = styled.div`
  display: flex;

  justify-content: center;
  cursor: pointer;
  width: 10rem;

  border: 1px solid #78747e;
  border-radius: 5px;
  padding: 0.7rem 1rem 0.7rem 1rem;
  margin: 0.2rem 0 0.2rem 0;

  background-color: ${(props) => (props.selectedList ? "black" : "none")};
`;

export const ProfileText = styled.p`
  display: flex;
  font-size: 1.3rem;
  margin: 0;
  cursor: pointer;

  color: ${(props) => (props.selectedList ? "white" : "none")};
`;
