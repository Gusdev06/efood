import { createSlice } from "@reduxjs/toolkit";

type PaymentState = {
  isOpen: boolean;
};

const initialState: PaymentState = {
  isOpen: false,
};

const paymenteSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    openPayment: (state) => {
      state.isOpen = true;
    },
    closePayment: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openPayment, closePayment } = paymenteSlice.actions;
export default paymenteSlice.reducer;
