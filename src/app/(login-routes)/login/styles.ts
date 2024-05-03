import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;
export const InsideContainer = styled.div`
  border: 1px solid white;
  border-radius: 0.25rem;
  min-width: 450px;
  @media (min-width: 640px) {
    max-width: 600px;
  }
  @media (min-width: 768px) {
    min-width: 720px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.25rem;
`;
export const Header = styled.h1`
  font-size: 22px;
  @media (min-width: 640px) {
    font-size: 24px;
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1024px) {
    font-size: 38px;
  }
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  gap: 1.25rem;
`;
export const Button = styled.button`
  border: 1px solid white;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 16px;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.3s, font-weight 0.3s;

  &:hover {
    background-image: radial-gradient(circle, black, white);
    transform: scale(1.1);
    font-weight: bold;
  }
`;
export const Erros = styled.p`
  font-size: 0.875rem  
  color: #dc2626
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  @media (min-width: 640px) {
    max-width: 400px;
  }
  @media (min-width: 768px) {
    min-width: 500px;
  }
  width: 100%;
`;
