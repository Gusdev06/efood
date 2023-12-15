import { useContext } from "react";
import BannerHome from "../../Containers/Home/bannerHome";
import RestaurantesList from "../../Containers/Home/restaurantesList";
import RestaurantContext from "../../context/restaurantesContext";

const Home = () => {
  const { restaurantes } = useContext(RestaurantContext);

  return (
    <>
      <BannerHome />
      <div className="container">
        <RestaurantesList restaurantes={restaurantes}></RestaurantesList>
      </div>
    </>
  );
};

export { Home };
