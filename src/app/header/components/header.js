import React from "react";
import * as S from "./style";
import logoImg from "static/logo.png";

const Header = () => {
  return (
    <S.HeaderTemplate>
      <S.Logo src={logoImg} />
      <S.HeaderUserSection>
        <S.HeaderLink to="/new">new</S.HeaderLink>
        <S.HeaderLink to="/login">login</S.HeaderLink>
      </S.HeaderUserSection>
    </S.HeaderTemplate>
  );
};

export default Header;
