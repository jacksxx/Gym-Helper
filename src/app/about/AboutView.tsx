"use client";
import Card from "@/components/Card/Card";
import Link from "next/link";
import React from "react";
import * as S from "./styles";
const AboutView = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          Com Gym Helper Você:
        </S.Header>
        <S.CardContainer>
          <S.CardWrapper>
            <Card
              alt="kettlebel"
              source="https://images.pexels.com/photos/4164844/pexels-photo-4164844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              w={350}
              h={50}
              text="Você poderá treinar com Kettlebel"
            />
          </S.CardWrapper>
          <S.CardWrapper>
            <Card
              alt="plate"
              source="https://images.pexels.com/photos/11319087/pexels-photo-11319087.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              w={350}
              h={50}
              text="Você poderá treinar com Anilhas"
            />
          </S.CardWrapper>
          <S.CardWrapper>
            <Card
              alt="weigths"
              source="https://images.pexels.com/photos/13885345/pexels-photo-13885345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              w={350}
              h={50}
              text="Você poderá treinar com Barras e Halteres"
            />
          </S.CardWrapper>
        </S.CardContainer>
        <S.InfoBottomContainer>
          <S.InfoBottomH1>GYM HELPER</S.InfoBottomH1>
          <S.InfoBottomP>Faça com que seus treinos rendam mais</S.InfoBottomP>
        </S.InfoBottomContainer>
        <S.Link>
          <Link href={"/register"}>Se Cadastre Agora!</Link>
        </S.Link>
      </S.Wrapper>
    </S.Container>
  );
};

export default AboutView;
