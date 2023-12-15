import { useEffect, useState } from "react";
import { api } from "../services/api";

const useCardapio = (id: number) => {
  const [cardapio, setCardapio] = useState([]);

  useEffect(() => {
    const fetchCardapio = async () => {
      try {
        const response = await api.get(`/restaurantes/${id}`);
        setCardapio(response.data.cardapio);
      } catch (error) {
        console.error("Erro ao buscar cardápio", error);
      }
    };

    fetchCardapio();
  }, [id]);

  return cardapio;
};

export default useCardapio;
