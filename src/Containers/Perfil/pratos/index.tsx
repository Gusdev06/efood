import { useState } from "react";
import { add, openCart } from "../../../store/reducers/cart";
import * as S from "./styles";

import { useDispatch } from "react-redux";
import { ICardapio } from "../../../context/restaurantesContext";
import { FormatDescription } from "../../../utils";

type PratosProps = {
  cardapio: ICardapio;
};

const Pratos = ({ cardapio }: PratosProps) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const OpenCart = () => {
    dispatch(openCart());
  };

  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(add(cardapio));
    handleCloseModal();
    OpenCart();
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <S.Card onClick={handleOpenModal}>
        <img src={cardapio.foto} alt="" />
        <h3>{cardapio.nome}</h3>
        <p>{FormatDescription(cardapio.descricao)}</p>
        <button onClick={handleOpenModal}>Adicionar ao carrinho</button>
      </S.Card>

      <S.ModalStyle
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="overlay"
      >
        <img src={cardapio.foto} alt="" />
        <S.ContentModal>
          <h3>{cardapio.nome}</h3>
          <S.DescriptionModal>{cardapio.descricao}</S.DescriptionModal>
          Serve: de 2 a 3 pessoas
          <S.ButtonModal onClick={addToCart}>
            Adicionar ao carrinho - R$ {cardapio.preco}
          </S.ButtonModal>
        </S.ContentModal>
        <S.ButtonClose onClick={handleCloseModal}>X</S.ButtonClose>
      </S.ModalStyle>
    </>
  );
};

export default Pratos;
