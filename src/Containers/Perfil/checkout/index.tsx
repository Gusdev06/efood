import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../store";
import { openCart } from "../../../store/reducers/cart";
import { closeCheckout } from "../../../store/reducers/checkout";
import { openPayment } from "../../../store/reducers/payment";
import { Aside, AsideContainer, Overlay } from "../../../styles";
import {
  Buttons,
  CepAndNumber,
  DivButtons,
  Infos,
  Input,
  Tittle,
} from "./styles";

const Checkout = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootReducer) => state.checkout);

  const handleCheckout = () => {
    dispatch(closeCheckout());
  };

  const returnCart = () => {
    dispatch(closeCheckout());
    dispatch(openCart());
  };

  const goPayment = () => {
    dispatch(openPayment());
    dispatch(closeCheckout());
  };
  return (
    <AsideContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={handleCheckout} />
      <Aside>
        <div>
          <Tittle>Entrega</Tittle>
        </div>
        <Infos>
          <label htmlFor="">Quem ira receber</label>
          <div>
            <Input type="text" />
          </div>
          <label htmlFor="">Endereço</label>
          <div>
            <Input type="text" />
          </div>
          <label htmlFor="">Cidade</label>
          <div>
            <Input type="text" />
          </div>
          <CepAndNumber>
            <div>
              <label htmlFor="">Cep</label>
              <div>
                <Input type="text" />
              </div>
            </div>
            <div>
              <label htmlFor="">Numero</label>
              <div>
                <Input type="text" />
              </div>
            </div>
          </CepAndNumber>
          <label htmlFor="">Complemento</label>
          <div>
            <Input type="text" />
          </div>
        </Infos>
        <DivButtons>
          <Buttons onClick={goPayment}>Continuar com o pagamento</Buttons>
          <Buttons onClick={returnCart}>Voltar para o carrinho</Buttons>
        </DivButtons>
      </Aside>
    </AsideContainer>
  );
};

export default Checkout;
