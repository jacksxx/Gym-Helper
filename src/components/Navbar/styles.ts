import styled from "styled-components";

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
    .hidden {
      display: none !important;
    }
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
`;
