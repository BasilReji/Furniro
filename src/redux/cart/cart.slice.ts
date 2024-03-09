import { createSlice } from "@reduxjs/toolkit";
import { furniture } from "../furnitures/furniture.slice";
import mockData from "../../mock/data.json";
export interface cartState {
  loading: boolean;
  error: boolean;
  cartItems: furniture[];
}

const initialState: cartState = {
  loading: false,
  error: false,
  cartItems: mockData,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.error = false;
      state.loading = false;
      state.cartItems = action.payload;
    },
  },
});

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
