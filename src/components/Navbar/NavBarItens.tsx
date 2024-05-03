"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as S from "./styles";

const NavBarItens = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Registrar",
    href: "/register",
  },
  {
    label: "Login",
    href: "/login",
  },
];

const NavMap = () => {
  const pathname = usePathname();
  // const { data: session } = useSession();
  return (
    <>
      {NavBarItens.map((item, index) => (
        <S.NavLi key={index}>
          <Link href={item.href}>
            <S.NavLink pathname={pathname} refer={item.href}>
              {item.label}
            </S.NavLink>
          </Link>
        </S.NavLi>
      ))}
      {/* {session?.user && (
              <S.NavLi>
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
              </S.NavLi>
            )}   */}
    </>
  );
};
export const Nav = ({ hidden }: { hidden: boolean }) => {
  return (
    <>
      {hidden ? (
        <S.NavUlHidden>
          <NavMap />
        </S.NavUlHidden>
      ) : (
        <S.NavUlVisible>
          <NavMap />
        </S.NavUlVisible>
      )}
    </>
  );
};
export default NavBarItens;
