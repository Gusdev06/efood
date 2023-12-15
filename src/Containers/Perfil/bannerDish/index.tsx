import * as S from "./styles";

type Props = {
  name: string;
  type: string;
  background: string;
};

const BannerDish = ({ name, type, background }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <S.TipoPrato>{type}</S.TipoPrato>
        <S.NomePrato>{name}</S.NomePrato>
      </div>
    </S.Banner>
  );
};

export default BannerDish;
