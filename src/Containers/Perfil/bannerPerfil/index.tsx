import banner from "../../../assets/fundo.png";
import { Category, Container, DivTittle, Imagem, Tittle } from "./styles";

const BannerPerfil = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${banner})` }}>
      <Container className="container">
        <DivTittle>
          <Category>Italiana</Category>
        </DivTittle>
        <DivTittle>
          <Tittle>La Dolce Vita Trattoria</Tittle>
        </DivTittle>
      </Container>
    </Imagem>
  );
};

export default BannerPerfil;
