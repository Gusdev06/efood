import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../store";
import { openCheckout } from "../../../store/reducers/checkout";
import { closePayment } from "../../../store/reducers/payment";
import { openSuccess } from "../../../store/reducers/success";
import { Aside, AsideContainer, Overlay } from "../../../styles";
import { formatPrice, getTotalPrice } from "../../../utils";
import { Infos, Input, Tittle } from "../checkout/styles";
import {
  Button,
  DivButtons,
  ExpirationDateContainer,
  NumberCard,
} from "./style";

const Payment = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootReducer) => state.payment);
  const { pratos } = useSelector((state: RootReducer) => state.cart);

  const handlePayment = () => {
    dispatch(closePayment());
  };

  const returnCheckout = () => {
    dispatch(closePayment());
    dispatch(openCheckout());
  };

  const Success = () => {
    dispatch(closePayment());
    dispatch(openSuccess());
  };
  return (
    <AsideContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={handlePayment} />
      <Aside>
        <Tittle>
          Pagamento - Valor a pagar {formatPrice(getTotalPrice(pratos))}
        </Tittle>
        <Infos>
          <div>
            <label htmlFor="cardName">Nome no cartão</label>
            <Input id="cardName" type="text" />
          </div>
          <NumberCard>
            <div>
              <label htmlFor="cardNumber">Número do cartão</label>
              <Input id="cardNumber" type="text" />
            </div>
            <div>
              <label htmlFor="cardCVV">CVV</label>
              <Input id="cardCVV" type="text" />
            </div>
          </NumberCard>
          <ExpirationDateContainer>
            <div>
              <label htmlFor="cardMonth">Mês de vencimento</label>
              <Input id="cardMonth" type="text" />
            </div>
            <div>
              <label htmlFor="cardYear">Ano de vencimento</label>
              <Input id="cardYear" type="text" />
            </div>
          </ExpirationDateContainer>
          <DivButtons>
            <Button onClick={Success}>Finalizar pagamento</Button>
            <Button onClick={returnCheckout}>
              Voltar para a edição de endereço
            </Button>
          </DivButtons>
        </Infos>
      </Aside>
    </AsideContainer>
  );
};

export default Payment;
