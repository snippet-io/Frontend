import styled from "styled-components";

export const SnippetItemWarpper = styled.article`
  display: flex;
  flex-direction: row;

  padding: 1rem;
  border-radius: 0.35rem;
  /* border: 1px solid #000000; */
  margin: 0 0 1.2rem 0;

  box-shadow: 2px 2px 2px 2px #a4a4a4;
  transition: margin 0.3s;

  &:hover {
    margin: 1.2rem 0 2.4rem 0;
  }
`;
export const FrontWarpper = styled.div``;

export const HeaderWarpper = styled.div`
  display: flex;
`;

export const HeaderContentWarpper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 0 0 0.4rem;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;

  height: 80%;
  margin: 0 0 0 0rem;
  font-size: 1.256rem;
`;

export const UserName = styled.p`
  margin: 0 0 0 0rem;
`;

export const ProfileImg = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border: 1px solid #000000;
  border-radius: 100rem;
`;

export const Description = styled.p`
  color: #7e857e;

  margin: 1rem 0 0 3rem;
`;

export const Language = styled.p`
  font-size: 1rem;
  font-weight: lighter;
  color: #ffffff;

  padding: 0 0.8rem 0 0.8rem;
  margin: 0 0 0 0.5rem;

  border: 1px solid #000000;
  border-radius: 100rem;
  background-color: #000000;
`;

export const FooterWarpper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const Datetime = styled.p`
  display: flex;

  margin: 0 0 0 0;
  margin-top: auto;
`;

export const StarWapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: auto;
  align-items: center;
`;

export const StarCount = styled.p`
  margin: 0;
`;

export const Star = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid black;
`;
