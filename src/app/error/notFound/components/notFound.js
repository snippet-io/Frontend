import * as S from "../style";
import statusImage from "static/404.jpg";

const NotFound = () => {
  return (
    <>
      <S.ContentWrapper>
        <S.StatusImageWrapper>
          <S.StatusImage src={statusImage}></S.StatusImage>
        </S.StatusImageWrapper>
        <S.ButtonToGoBackWrapper>
          <S.ButtonToGoBack>BACK</S.ButtonToGoBack>
        </S.ButtonToGoBackWrapper>
      </S.ContentWrapper>
    </>
  );
};

export default NotFound;
