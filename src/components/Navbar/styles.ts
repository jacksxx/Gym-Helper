import styled, { css } from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid white;
`;
export const ContainerNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: relative;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-x-5;
  }
  @media (min-width: 1024px) {
    justify-content: space-x-10;
  }
`;
export const NavBar = styled.nav`
  @media (max-width: 767px) {
    display: none;
  }
`;
export const Logo = styled.div`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  color: white;
  padding: 0.75rem;
  font-size: 20px;
  box-shadow: 0 2px 4px white;
  font-weight: 600;
  border-radius: 0.375rem;
  transition: background 0.3s ease;
  &:hover {
    background-image: radial-gradient(circle, black, white);
  }
`;
export const NavBarHidden = styled.nav<{ showNav: boolean }>`
  @media (min-width: 768px) {
    display: none;
  }

  ${(props) =>
    props.showNav
      ? css`
          padding-bottom: 1rem;
          padding-left: 0.625rem;
        `
      : css`
          height: 0;
          visibility: hidden;
          opacity: 0;
        `}
`;
export const NavLi = styled.li`
  display: flex;
  align-items: center;
  color: white;
  gap: 0.5rem;
`;
export const NavUlVisible = styled.ul`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 18px;

  @media (min-width: 1024px) {
    gap: 2.5rem;
  }
  gap: 1.75rem;
`;
export const NavUlHidden = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
`;
export const NavLink = styled.span<{ pathname: string; refer: string }>`
  padding: 0.75rem;
  border-radius: 0.125rem;
  display: inline-block;
  width: 100%;
  font-weight: ${({ pathname, refer }) =>
    pathname === refer ? "bold" : "normal"};
  &:hover {
    color: #d1d5db;
    text-decoration: underline;
    border: 1px solid white;
    transition: color 0.1s;
  }
`;
export const SpanButton = styled.span<{ showNav: boolean }>`
  padding: 9px;
  background-color: #e5e7eb;
  border: 0.5px solid;
  border-radius: 9999px;
  @media (min-width: 768px) {
    display: none;
  }
  transition: all 150ms ease-in;
  ${(props) =>
    props.showNav &&
    css`
      transform: rotate(180deg);
    `}
`;
