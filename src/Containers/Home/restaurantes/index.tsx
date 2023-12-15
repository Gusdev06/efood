import estrela from "../../../assets/estrela.svg";
import * as S from "./styles";

type Props = {
  name: string;
  description: string;
  image: string;
  avaliation: number;
  infos: string[];
  id: number;
};

const Restaurantes = ({
  avaliation,
  description,
  name,
  image,
  infos,
  id,
}: Props) => {
  return (
    <S.Card>
      <img src={image} alt="" />
      <S.TagContainer>
        {infos.map((info, index) => (
          <S.Tag key={index}>{info}</S.Tag>
        ))}
      </S.TagContainer>
      <S.Content>
        <S.TitleRating>
          <h2>{name}</h2>
          <S.ContainerRating>
            <S.Rating>{avaliation}</S.Rating>
            <img src={estrela} alt="estrela" />
          </S.ContainerRating>
        </S.TitleRating>
        <S.Description>{description}</S.Description>
        <S.Button type="link" title="Saiba Mais" to={`/perfil/${id}`}>
          Saiba Mais
        </S.Button>
      </S.Content>
    </S.Card>
  );
};

export default Restaurantes;
