"use client";
import { Input } from "@/components/Input/Input";
import { useSignUpForm } from "@/hooks/useSignUpForm";
import React from "react";
import * as S from "./styles";
import { Button } from "@/components/Button/Button";

const SignUpForm = () => {
  const { register, onSubmit, errors, handleSubmit } = useSignUpForm();
  return (
    <>
      <S.Container>
        <S.InsideContainer>
          <S.Wrapper>
            <S.Header>
              <p>Gym Helper</p>Comece Agora Sua Jornada
            </S.Header>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.Inputs>
                <Input
                  label="Nome"
                  id="name"
                  placeholder="Escreva seu nome Aqui"
                  type="text"
                  className="inputGeral"
                  {...register("name")}
                />
              </S.Inputs>
              {errors.name && <S.Erros>{errors.name.message}</S.Erros>}
              <S.Inputs>
                <Input
                  label="Email"
                  id="email"
                  placeholder="Exemplo@email.com"
                  className="inputGeral"
                  type="email"
                  {...register("email")}
                />
                {errors.email && <S.Erros>{errors.email.message}</S.Erros>}
              </S.Inputs>
              <S.Inputs>
                <Input
                  label="Senha"
                  id="password"
                  placeholder="***************"
                  className="inputGeral"
                  type="password"
                  {...register("name")}
                />
                {errors.password && (
                  <S.Erros>{errors.password.message}</S.Erros>
                )}
              </S.Inputs>
              <S.Button type="submit">
                Cadastrar
              </S.Button>
            </S.Form>
            {errors.root && <S.Erros>{errors.root.message}</S.Erros>}
          </S.Wrapper>
        </S.InsideContainer>
      </S.Container>
    </>
  );
};

export default SignUpForm;
