import { useState } from "react";
import { add, openCart } from "../../../store/reducers/cart";
import * as S from "./styles";

import { useDispatch } from "react-redux";
import { PratosModel } from "../../../models";

type PratosProps = {
  pratos: PratosModel;
};

const Pratos = ({ pratos }: PratosProps) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { name, description, image, price } = pratos;

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const OpenCart = () => {
    dispatch(openCart());
  };

  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(add(pratos));
    handleCloseModal();
    OpenCart();
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <S.Card onClick={handleOpenModal}>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{description}</p>
        <button onClick={handleOpenModal}>Adicionar ao carrinho</button>
      </S.Card>

      <S.ModalStyle
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="overlay"
      >
        <img src={image} alt="" />
        <S.ContentModal>
          <h3>{name}</h3>
          <S.DescriptionModal>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
          </S.DescriptionModal>
          Serve: de 2 a 3 pessoas
          <S.ButtonModal onClick={addToCart}>
            Adicionar ao carrinho - R$ {price}
          </S.ButtonModal>
        </S.ContentModal>
        <S.ButtonClose onClick={handleCloseModal}>X</S.ButtonClose>
      </S.ModalStyle>
    </>
  );
};

export default Pratos;
