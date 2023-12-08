import { PratosModel } from "../models";

export const formatPrice = (amount = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
};

export const getTotalPrice = (pratos: PratosModel[]) => {
  return pratos.reduce((acumulator, currentPrice) => {
    return (acumulator += currentPrice.price);
  }, 0);
};
