import banner from "../../../assets/fundo.png";
import { Category, DivTittle, Imagem, Tittle } from "./styles";

const BannerPerfil = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <DivTittle>
          <Category>Italiana</Category>
          <Tittle>La Dolce Vita Trattoria</Tittle>
        </DivTittle>
      </div>
    </Imagem>
  );
};

export default BannerPerfil;
