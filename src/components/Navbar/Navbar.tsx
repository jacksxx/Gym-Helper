"use client";

import Link from "next/link";
import * as S from "./styles";
import { usePathname } from "next/navigation";
// import { BsChevronCompactUp } from "react-icons/bs";
import React, { useState } from "react";
import Image from "next/image";
import usericon from "@/images/user.jpg";
// import NavbarHidden from "./NavbarHidden";
import { signIn, signOut, useSession } from "next-auth/react";
// import SignOut from "../SignOut";
// import NavbarItens from "./NavbarItens";

const Navbar = () => {
  // const pathname = usePathname();
  // const [showProfile, setShowProfile] = useState<boolean>(false);
  // const [showNav, setShowNav] = useState<boolean>(false);
  // const { data: session } = useSession();
  return (
    <S.Container>
      <S.ContainerNavBar>
        <S.Wrapper>
          <Link href={"/"}>
            <S.Logo>Gym Helper</S.Logo>
          </Link>
          <S.NavBar>
            {/* {/* <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
              {NavbarItens.map((item, index) => (
                <li key={index} className="navComponents">
                  <Link
                    href={item.href}
                    className={` py-3 inline-block w-full 
                                        ${
                                          pathname === item.href
                                            ? "font-bold"
                                            : ""
                                        }
                                         hover:text-neutral-500 transition-colors duration-100`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {session?.user && (
                <li className="navComponents">
                  <Link
                    href={"/posts"}
                    className={` py-3 inline-block w-full 
                                        ${
                                          pathname === "/posts"
                                            ? "font-bold"
                                            : ""
                                        }
                                         hover:text-neutral-500 transition-colors duration-100`}
                  >
                    My Posts
                  </Link>
                </li>
              )}               
            </ul> */}
          </S.NavBar>
        </S.Wrapper>
        {/* <div className="flex items-center space-x-4 pr-2">
          <div
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
          </div>
          <span
            onClick={() => setShowNav(!showNav)}
            className={`p-[9px] bg-gray-200 rounded-full md:hidden transition ease-in duration-150 ${
              showNav ? "rotate-180" : "0"
            }`}
          >
            <BsChevronCompactUp />
          </span>
        </div> */}
      </S.ContainerNavBar>
      {/* <NavbarHidden showNav={showNav} setShowNav={setShowNav} /> */}
    </S.Container>
  );
};

export default Navbar;
