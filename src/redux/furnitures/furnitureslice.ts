import { createSlice } from "@reduxjs/toolkit";

export interface furnitureState {
  loading: boolean;
  error: boolean;
  furnitures: {
    name: string;
    id: number;
  }[];
  furnitureDetails: object;
}

const initialState: furnitureState = {
  loading: false,
  error: false,
  furnitures: [],
  furnitureDetails: {},
};

export const furnitureSlice = createSlice({
  name: "furniture",
  initialState,
  reducers: {
    getFurnitures: (state) => {
      state.error = false;
      state.loading = false;
      state.furnitures = [
        {
          name: "Furniture",
          id: 1,
        },
      ];
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { getFurnitures } = furnitureSlice.actions;

export default furnitureSlice.reducer;
