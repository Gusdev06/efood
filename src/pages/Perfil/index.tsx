import PratosList from "../../Containers/Perfil/PratosList";
import BannerPerfil from "../../Containers/Perfil/bannerPerfil";
import Cart from "../../Containers/Perfil/carrinho";
import Checkout from "../../Containers/Perfil/checkout";
import Payment from "../../Containers/Perfil/payments";
import Success from "../../Containers/Perfil/success";
import pizza from "../../assets/pizza.png";
import { Banner } from "../../components/Banner";
import { PratosModel } from "../../models";

const pratos: PratosModel[] = [
  {
    id: 1,
    name: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
    price: 60.9,
  },
  {
    id: 2,
    name: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
    price: 60.9,
  },
  {
    id: 3,
    name: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
    price: 60.9,
  },
  {
    id: 4,
    name: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
    price: 60.9,
  },
  {
    id: 5,
    name: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
    price: 60.9,
  },
  {
    id: 6,
    name: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
    price: 60.9,
  },
];

const Perfil = () => {
  return (
    <>
      <Banner />
      <BannerPerfil />
      <PratosList pratos={pratos} />
      <Cart />
      <Checkout />
      <Payment />
      <Success />
    </>
  );
};

export default Perfil;
