import { IRestaurantes } from "../../../context/restaurantesContext";
import Restaurantes from "../restaurantes";
import * as S from "./styles";

type Props = {
  restaurantes: IRestaurantes[];
};

const RestaurantesList = ({ restaurantes }: Props) => {
  const getInfos = (restaurante: IRestaurantes) => {
    const tags = [];
    if (restaurante.destacado === true) {
      tags.push("Destaque da semana");
    }
    if (restaurante.tipo) {
      tags.push(restaurante.tipo);
    }

    return tags;
  };

  return (
    <S.ContainerProducts>
      {restaurantes.map((restaurante) => {
        return (
          <Restaurantes
            id={restaurante.id}
            key={restaurante.id}
            name={restaurante.titulo}
            description={restaurante.descricao}
            image={restaurante.capa}
            avaliation={restaurante.avaliacao}
            infos={getInfos(restaurante)}
          />
        );
      })}
    </S.ContainerProducts>
  );
};

export default RestaurantesList;
