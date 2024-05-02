import React from "react";
import { Nav } from "./NavBarItens";
import * as S from "./styles";

interface INav {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarHidden = ({ showNav, setShowNav }: INav) => {
  return (
    <>
      {showNav && (
        <S.NavBarHidden showNav={showNav}>
          <Nav hidden={true} />
        </S.NavBarHidden>
      )}
    </>
  );
};

export default NavbarHidden;
