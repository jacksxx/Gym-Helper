import * as S from "./styles";
interface LoadingProps {
  message?: string;
}

const Loading = ({ message = "" }: LoadingProps) => {
  return (
    <>
      <S.Container>
        <S.SpinLoading />
        <S.Message>{message}</S.Message>
      </S.Container>
    </>
  );
};

export default Loading;
