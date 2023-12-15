import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PratosList from "../../Containers/Perfil/PratosList";
import BannerDish from "../../Containers/Perfil/bannerDish";
import BannerPerfil from "../../Containers/Perfil/bannerPerfil";
import Cart from "../../Containers/Perfil/carrinho";
import Checkout from "../../Containers/Perfil/checkout";
import Payment from "../../Containers/Perfil/payments";
import Success from "../../Containers/Perfil/success";
import RestaurantContext, {
  IRestaurantes,
} from "../../context/restaurantesContext";

const Perfil = () => {
  const { id } = useParams();
  const { getRestaurantesById } = useContext(RestaurantContext);
  const [restaurante, setRestaurante] = useState<IRestaurantes | null>(null);

  useEffect(() => {
    const fetchRestaurante = async () => {
      const dadosRestaurante = await getRestaurantesById(Number(id));
      setRestaurante(dadosRestaurante);
    };

    fetchRestaurante();
  }, [id, getRestaurantesById]);

  if (!restaurante) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <BannerPerfil />
      <BannerDish
        background={restaurante.capa}
        name={restaurante.titulo}
        type={restaurante.tipo}
      />

      <PratosList cardapio={restaurante.cardapio} />
      <Cart />
      <Checkout />
      <Payment />
      <Success />
    </>
  );
};

export default Perfil;
