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
      <S.HeaderUserSection>
        <S.HeaderLink to="/new">new</S.HeaderLink>
        <S.HeaderLink to="/login">login</S.HeaderLink>
      </S.HeaderUserSection>
    </S.HeaderTemplate>
  );
};

export default Header;
