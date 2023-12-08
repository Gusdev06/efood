import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./reducers/checkout";
import paymentReducer from "./reducers/payment";
import successReducer from "./reducers/success";

import cartReducer from "./reducers/cart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    payment: paymentReducer,
    success: successReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type RootReducer = ReturnType<typeof store.getState>;
