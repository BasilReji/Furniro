import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../mock/data.json";
export interface furnitureState {
  loading: boolean;
  error: boolean;
  furnitureList: furniture[];

  furnitureDetails: furniture | undefined;
}

export interface furniture {
  id: number;
  title: string;
  genre: string;
  image: string;
  country: string;
  year: number;
  lead: string;
}

const initialState: furnitureState = {
  loading: false,
  error: false,
  furnitureList: [],
  furnitureDetails: undefined,
};

export const furnitureSlice = createSlice({
  name: "furniture",
  initialState,
  reducers: {
    getFurnitureList: (state) => {
      state.error = false;
      state.loading = false;
      state.furnitureList = mockData;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getFurnitureList } = furnitureSlice.actions;

export default furnitureSlice.reducer;
