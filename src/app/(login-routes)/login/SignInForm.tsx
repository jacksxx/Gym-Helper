"use client";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import useSignInForm from "@/hooks/useSignInForm";
import * as S from "./styles";
import React from "react";

const SignInForm = () => {
  const { register, onSubmit, errors, handleSubmit } = useSignInForm();
  return (
    <>
      <S.Container>
        <S.InsideContainer>
          <S.Wrapper>
            <S.Header>
              Gym Helper <p>Acesse Agora!</p>
            </S.Header>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
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
              <S.Button type="submit">Cadastrar</S.Button>
            </S.Form>
            {errors.root && <S.Erros>{errors.root.message}</S.Erros>}
          </S.Wrapper>
        </S.InsideContainer>
      </S.Container>
    </>
  );
};

export default SignInForm;
