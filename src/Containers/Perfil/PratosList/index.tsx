import { PratosModel } from "../../../models";
import Pratos from "../pratos";
import * as S from "./styles";

type Props = {
  pratos: PratosModel[];
};

const PratosList = ({ pratos }: Props) => {
  return (
    <div className="container">
      <S.List>
        {pratos.map((prato) => {
          return <Pratos pratos={prato}></Pratos>;
        })}
      </S.List>
    </div>
  );
};

export default PratosList;
