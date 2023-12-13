import fundo from "../../../assets/fundo.png";
import * as S from "./styles";

const BannerDish = () => {
  return (
    <S.Banner style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <S.TipoPrato>Italiana</S.TipoPrato>
        <S.NomePrato>La Dolce Vita Trattoria</S.NomePrato>
      </div>
    </S.Banner>
  );
};

export default BannerDish;
