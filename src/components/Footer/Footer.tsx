"use client";
import React from "react";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.Text className="text-[20px]">
          Gym Helper App ©{new Date().getFullYear()}
        </S.Text>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
