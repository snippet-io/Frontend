import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderTemplate = styled.div`
  display: flex;
  background-color: #010101;
  width: 100%;
  height: 2rem;
  padding: 0.12rem;

  align-items: center;
`;

export const Logo = styled.img`
  width: 5.75rem;
  margin-left: 1rem;
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

  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;
