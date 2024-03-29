import { configureStore } from "@reduxjs/toolkit";
import furnitureslice from "../redux/furnitures/furniture.slice";
import cartSlice from "../redux/cart/cart.slice";
export const store = configureStore({
  reducer: {
    furniture: furnitureslice,
    cart: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
