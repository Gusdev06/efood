import { createSlice } from "@reduxjs/toolkit";

type Success = {
  isOpen: boolean;
};

const initialState: Success = {
  isOpen: false,
};

const success = createSlice({
  name: "success",
  initialState,
  reducers: {
    openSuccess: (state) => {
      state.isOpen = true;
    },
    CloseSuccess: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSuccess, CloseSuccess } = success.actions;
export default success.reducer;
