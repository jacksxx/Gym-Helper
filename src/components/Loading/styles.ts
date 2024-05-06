import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinLoading = styled.span`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  display: inline-block;
  animation: spin 1s linear infinite;
  border-width: 2px;
  border-style: solid;
  border-color: #3182ce;
  border-radius: 9999px;
  padding: 8px;

  @media (min-width: 768px) {
    padding: 12px;
  }

  @media (min-width: 1024px) {
    padding: 16px;
  }
`;

export const Message = styled.p`
  margin-left: 8px;

  @media (min-width: 768px) {
    margin-left: 12px;
  }

  @media (min-width: 1024px) {
    margin-left: 16px;
  }
`;
