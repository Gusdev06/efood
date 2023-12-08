import { RestaurantesModel } from "../../../models";
import Restaurantes from "../restaurantes";
import * as S from "./styles";

type Props = {
  restaurantes: RestaurantesModel[];
};

const RestaurantesList = ({ restaurantes }: Props) => {
  return (
    <div className="container">
      <S.List>
        {restaurantes.map((restaurante) => {
          return (
            <Restaurantes
              key={restaurante.id}
              name={restaurante.name}
              description={restaurante.description}
              image={restaurante.image}
              avaliation={restaurante.avaliation}
              infos={restaurante.infos}
            ></Restaurantes>
          );
        })}
      </S.List>
    </div>
  );
};

export default RestaurantesList;
