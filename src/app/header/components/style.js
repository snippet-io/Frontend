import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderTemplate = styled.div`
  display: flex;
  background-color: #010101;
  width: 100%;
  height: 2.7rem;
  padding: 0.12rem;

  align-items: center;
`;

export const Logo = styled.img`
  width: 5.75rem;
  margin: 0 2rem 0 1rem;
  cursor: pointer;
`;

export const HeaderUserSection = styled.div`
  display: flex;
  margin-left: auto;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  margin-left: auto;
  color: #ffffff;
  font-size: 0.95rem;

  margin-left: 1.8rem;
  margin-right: 0rem;
  cursor: pointer;
`;

export const HeaderProfile = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 10rem;

  cursor: pointer;
  margin: 0 2rem 0 0;
`;
