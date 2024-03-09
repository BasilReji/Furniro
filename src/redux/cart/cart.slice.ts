import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { furniture } from "../furnitures/furniture.slice";
import mockData from "../../mock/data.json";
import { mockApi } from "../../mock/mockApi";
export interface cartState {
  loading: boolean;
  error: boolean;
  cartItems: furniture[];
}

const initialState: cartState = {
  loading: false,
  error: false,
  cartItems: [],
};

export const fetchCartItems = createAsyncThunk("cart/fetchCartItems", async () => {
  const result = await mockApi(mockData);
  return result;
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.cartItems = action.payload.data;
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
