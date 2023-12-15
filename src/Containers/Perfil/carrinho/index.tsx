import { useDispatch, useSelector } from "react-redux";

import { RootReducer } from "../../../store";
import { closeCart, remove } from "../../../store/reducers/cart";
import { openCheckout } from "../../../store/reducers/checkout";

import { formatPrice, getTotalPrice } from "../../../utils";

import trash from "../../../assets/lixeira.svg";

import { Aside, AsideContainer, Overlay } from "../../../styles";
import * as S from "./styles";

const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, pratos } = useSelector((state: RootReducer) => state.cart);

  const CloseCart = () => {
    dispatch(closeCart());
  };

  const removeFromCart = (id: number) => {
    dispatch(remove(id));
  };

  const goCheckout = () => {
    dispatch(openCheckout());
    dispatch(closeCart());
  };

  return (
    <AsideContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={CloseCart} />
      <Aside className={isOpen ? "slideOpen" : "slideClose"}>
        {pratos.length > 0 ? (
          <>
            <ul>
              {pratos.map((prato) => (
                <S.CartItem key={prato.id}>
                  <img src={prato.foto} alt={prato.nome} />
                  <div>
                    <h3>{prato.nome}</h3>
                    <span>{formatPrice(prato.preco)}</span>
                  </div>
                  <img
                    src={trash}
                    alt="lixeira"
                    onClick={() => removeFromCart(prato.id)}
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>
              Valor total <span>{formatPrice(getTotalPrice(pratos))}</span>
            </S.Prices>
            <S.ButtonCart onClick={goCheckout}>
              Continuar com a entrega
            </S.ButtonCart>
          </>
        ) : (
          <p>
            O carrinho está vazio, adicione um produto para continuar a compra
          </p>
        )}
      </Aside>
    </AsideContainer>
  );
};

export default Cart;
