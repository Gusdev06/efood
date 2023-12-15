import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICardapio } from "../../context/restaurantesContext";

type CartState = {
  pratos: ICardapio[];
  isOpen: boolean;
};

const initialState: CartState = {
  pratos: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ICardapio>) => {
      const prato = state.pratos.find(
        (prato) => prato.id === action.payload.id
      );

      if (!prato) {
        state.pratos.push(action.payload);
      } else {
        alert("Esse prato ja foi adicionado!");
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.pratos = state.pratos.filter(
        (prato) => prato.id !== action.payload
      );
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    openChk: (state) => {
      state.isOpen = true;
    },
    clear: (state) => {
      state.pratos = [];
    },
  },
});

export const { add, remove, openCart, closeCart, clear, openChk } =
  cartSlice.actions;
export default cartSlice.reducer;
