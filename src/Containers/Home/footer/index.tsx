import { Container, Description, DivLogo, DivTittle, Imagem } from "./styles";

import facebook from "../../../assets/facebook-round-svgrepo-com 1.svg";
import instagram from "../../../assets/instagram-round-svgrepo-com (1) 1.svg";
import logo from "../../../assets/logo.svg";
import twitter from "../../../assets/twitter-2-svgrepo-com 1.svg";
import banner from "../../../assets/Vector.png";

export const Footer = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Container>
          <DivLogo>
            <img src={logo} alt="" />
          </DivLogo>
          <DivTittle>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </DivTittle>
          <Description>
            <p>
              A efood é uma plataforma para divulgação de estabelecimentos, a
              responsabilidade pela entrega, qualidade dos produtos é toda do
              estabelecimento contratado.{" "}
            </p>
          </Description>
        </Container>
      </div>
    </Imagem>
  );
};
