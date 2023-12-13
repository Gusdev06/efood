import { RestaurantesModel } from "../../../models";
import Restaurantes from "../restaurantes";
import * as S from "./styles";

type Props = {
  restaurantes: RestaurantesModel[];
};

const RestaurantesList = ({ restaurantes }: Props) => {
  return (
    <S.ContainerProducts>
      {restaurantes.map((restaurante) => {
        return (
          <Restaurantes
            key={restaurante.id}
            name={restaurante.name}
            description={restaurante.description}
            image={restaurante.image}
            avaliation={restaurante.avaliation}
            infos={restaurante.infos}
          />
        );
      })}
    </S.ContainerProducts>
  );
};

export default RestaurantesList;
