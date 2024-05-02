"use client";

import Link from "next/link";
import * as S from "./styles";
import { usePathname } from "next/navigation";
import { BsChevronCompactUp } from "react-icons/bs";
import React, { useState } from "react";
import Image from "next/image";
import usericon from "@/images/user.jpg";
import NavBarHidden from "./NavBarHidden";
import { signIn, signOut, useSession } from "next-auth/react";
// import SignOut from "../SignOut";
import { Nav } from "./NavBarItens";

const Navbar = () => {
  const pathname = usePathname();
  // const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  // const { data: session } = useSession();
  return (
    <S.Container>
      <S.ContainerNavBar>
        <S.Wrapper>
          <Link href={"/"}>
            <S.Logo>Gym Helper</S.Logo>
          </Link>
          <S.NavBar>
            <Nav hidden={false} />
          </S.NavBar>
        </S.Wrapper>
        <div className="flex items-center space-x-4 pr-2 round">
          {/* <div
            onClick={() => setShowProfile(!showProfile)}
            className="relativa cursor-pointer"
          >
            <Image
              src={usericon}
              width={35}
              height={35}
              className="rounded-full object-cover"
              alt=""
            />
            <SignOut showProfile={showProfile} />
          </div> */}
          <S.SpanButton showNav={showNav} onClick={() => setShowNav(!showNav)}>
            <BsChevronCompactUp />
          </S.SpanButton>
        </div>
      </S.ContainerNavBar>
      <NavBarHidden showNav={showNav} setShowNav={setShowNav} />
    </S.Container>
  );
};

export default Navbar;
