import React from "react";
import * as S from "./style";
import logoImg from "static/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.HeaderTemplate>
      <Link to="/">
        <S.Logo src={logoImg} />
      </Link>
      <S.HeaderLink to="/new">New</S.HeaderLink>
      <S.HeaderLink to="/">List</S.HeaderLink>
      <S.HeaderLink to="/search">Search</S.HeaderLink>
      <S.HeaderUserSection>
        <S.HeaderLink to="/login">Login</S.HeaderLink>
      </S.HeaderUserSection>
    </S.HeaderTemplate>
  );
};

export default Header;
