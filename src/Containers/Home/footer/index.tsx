import fundo from "../../../assets/Vector.png";
import facebook from "../../../assets/facebook-round-svgrepo-com 1.svg";
import instagram from "../../../assets/instagram-round-svgrepo-com (1) 1.svg";
import logo from "../../../assets/logo.svg";
import twitter from "../../../assets/twitter-2-svgrepo-com 1.svg";

import * as S from "./styles";

export const Footer = () => (
  <S.FundoFooter style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <S.Logo src={logo} alt="efood" />
      <S.RedesSociais>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </S.RedesSociais>
      <S.TextoFooter>
        A efood é uma plataforma para divulgação de estabelicementos, a
        responsabilidade pela entrega,qualidade dos produtos é toda do
        estabelicimento contratado
      </S.TextoFooter>
    </div>
  </S.FundoFooter>
);
