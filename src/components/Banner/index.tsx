import { Container, DivLogo, Imagem, Tittle } from "./styles";

import banner from "../../assets/Vector.png";
import logo from "../../assets/logo.svg";

export const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Container>
          <DivLogo>
            <div>
              <Tittle>Resturantes</Tittle>
            </div>
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <Tittle>0 Produto(S) no carrinho</Tittle>
            </div>
          </DivLogo>
        </Container>
      </div>
    </Imagem>
  );
};
