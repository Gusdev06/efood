import banner from "../../../assets/Vector.png";
import logo from "../../../assets/logo.svg";
import * as S from "./styles";
const BannerPerfil = () => {
  return (
    <S.HeaderProfile style={{ backgroundImage: `url(${banner})` }}>
      <S.Container>
        <p>Restaurantes</p>
        <S.LogoHeader src={logo} alt="efood" />
        <p>0 Produto(S) no carrinho</p>
      </S.Container>
    </S.HeaderProfile>
  );
};

export default BannerPerfil;
