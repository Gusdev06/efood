import { ICardapio } from "../../../context/restaurantesContext";
import Pratos from "../pratos";
import * as S from "./styles";

type Props = {
  cardapio: ICardapio[];
};

const PratosList = ({ cardapio }: Props) => {
  return (
    <div className="container">
      <S.List>
        {cardapio.map((item) => {
          return <Pratos cardapio={item} key={item.id} />;
        })}
      </S.List>
    </div>
  );
};

export default PratosList;
