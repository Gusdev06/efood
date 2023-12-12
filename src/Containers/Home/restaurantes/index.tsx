import estrela from "../../../assets/estrela.svg";
import { Tag } from "../tags";
import * as S from "./styles";

type Props = {
  name: string;
  description: string;
  image: string;
  avaliation: number;
  infos: string[];
};

const Restaurantes = ({
  avaliation,
  description,
  name,
  image,
  infos,
}: Props) => {
  return (
    <S.Card>
      <img src={image} alt="" />
      <S.Content>
        <S.DivInfos>
          {infos.map((info, index) => (
            <Tag key={index}>{info}</Tag>
          ))}
        </S.DivInfos>
        <S.DivTittle>
          <S.Tittle>{name}</S.Tittle>
          <S.Avaliation>
            <span>{avaliation}</span>
            <img src={estrela} alt="" />
          </S.Avaliation>
        </S.DivTittle>
        <S.Description>{description}</S.Description>
        <S.Button type="link" title="Saiba Mais" to="/perfil">
          Saiba Mais
        </S.Button>
      </S.Content>
    </S.Card>
  );
};

export default Restaurantes;
