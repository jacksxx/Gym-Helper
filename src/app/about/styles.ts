import styled from "styled-components";

export const Container = styled.div`
    display: flex
    flex-direction: column;
    margin-top: 1.25rem;
    gap: 1.25rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
`;
export const Header = styled.h1`
  display:flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
`;
export const InfoBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const InfoBottomH1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
export const InfoBottomP = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
export const Link = styled.span`
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  width: fit-content;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  animation: pulse 1.5s ease-in-out infinite;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.25);
  }
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const CardWrapper = styled.div`
  &:hover {
    transform: scale(1.05);
  }
`;
