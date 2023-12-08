import { Container, DivLogo, DivTittle, Imagem, Tittle } from "./styles";

import banner from "../../../assets/Vector.png";
import logo from "../../../assets/logo.svg";

export const BannerHome = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Container>
          <DivLogo>
            <img src={logo} alt="" />
          </DivLogo>
          <DivTittle>
            <Tittle>
              Viva experiências gastronômicas no conforto da sua casa
            </Tittle>
          </DivTittle>
        </Container>
      </div>
    </Imagem>
  );
};
