import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../store";
import { CloseSuccess } from "../../../store/reducers/success";
import { Aside, AsideContainer, Overlay } from "../../../styles";
import { Button } from "../pratos/styles";
import { DivMessage, Tittle } from "./style";

const Success = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.success);

  const dispatch = useDispatch();

  const handleSuccess = () => {
    dispatch(CloseSuccess());
  };
  return (
    <AsideContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={handleSuccess} />
      <Aside>
        <Tittle>Pedido realizado com sucesso!</Tittle>
        <DivMessage>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>

          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.{" "}
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </DivMessage>
        <Button onClick={handleSuccess}>Concluir</Button>
      </Aside>
    </AsideContainer>
  );
};

export default Success;
