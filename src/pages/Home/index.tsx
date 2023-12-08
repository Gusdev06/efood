import hioki from "../../assets/hioko.png";
import ladoce from "../../assets/ladolce.png";
import { BannerHome } from "../../Containers/Home/bannerHome";
import RestaurantesList from "../../Containers/Home/restaurantesList";
import { RestaurantesModel } from "../../models";

const restaurantes: RestaurantesModel[] = [
  {
    id: 1,
    name: "Hioki Sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    image: hioki,
    avaliation: 4.9,
    infos: ["Destaque da semana", "Japonesa"],
  },
  {
    id: 2,
    name: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: ladoce,
    avaliation: 4.6,
    infos: ["Italiana"],
  },
  {
    id: 3,
    name: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: ladoce,
    avaliation: 4.6,
    infos: ["Italiana"],
  },
  {
    id: 4,
    name: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: ladoce,
    avaliation: 4.6,
    infos: ["Italiana"],
  },
  {
    id: 5,
    name: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: ladoce,
    avaliation: 4.6,
    infos: ["Italiana"],
  },
  {
    id: 6,
    name: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: ladoce,
    avaliation: 4.6,
    infos: ["Italiana"],
  },
];

const Home = () => {
  return (
    <>
      <BannerHome />

      <RestaurantesList restaurantes={restaurantes}></RestaurantesList>
    </>
  );
};

export { Home };
