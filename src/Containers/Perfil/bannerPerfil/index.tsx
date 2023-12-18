import { useSelector } from "react-redux";
import banner from "../../../assets/Vector.png";
import logo from "../../../assets/logo.svg";
import { RootReducer } from "../../../store";
import * as S from "./styles";
const BannerPerfil = () => {
  const { pratos } = useSelector((state: RootReducer) => state.cart);
  return (
    <S.HeaderProfile style={{ backgroundImage: `url(${banner})` }}>
      <S.Container>
        <p>Restaurantes</p>
        <S.LogoHeader src={logo} alt="efood" />
        <p>{pratos.length} Produto(S) no carrinho</p>
      </S.Container>
    </S.HeaderProfile>
  );
};

export default BannerPerfil;
