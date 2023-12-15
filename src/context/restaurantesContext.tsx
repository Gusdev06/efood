import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface ICardapio {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export interface IRestaurantes {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: ICardapio[];
}

interface IRestaurantesContexType {
  restaurantes: IRestaurantes[];
  getRestaurantesById: (id: number) => Promise<IRestaurantes>;
}

const RestaurantContext = createContext<IRestaurantesContexType>(
  {} as IRestaurantesContexType
);
interface RestaurantProviderProps {
  children: ReactNode;
}

export function RestaurantProvider({ children }: RestaurantProviderProps) {
  const [restaurantes, setRestaurantes] = useState<IRestaurantes[]>([]);
  async function getRestaurantes() {
    const response = await api.get("/restaurantes");
    setRestaurantes(response.data);
  }

  async function getRestaurantesById(id: number) {
    const response = await api.get(`/restaurantes/${id}`);
    return response.data;
  }

  useEffect(() => {
    getRestaurantes();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurantes, getRestaurantesById }}>
      {children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantContext;
