'use client'
import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import * as S from './styles'
const MainComponent = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <S.MainComponent>{children}</S.MainComponent>
      <Footer />
    </>
  );
};

export default MainComponent;
