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
