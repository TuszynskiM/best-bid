import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface MarketState {
  price: number;
}
const initialState: MarketState = {
  price: 0,
};

export const marketReducer = createSlice({
  name: "market",
  initialState,
  reducers: {
    increment: (state: MarketState) => {
      state.price += 1;
    },
  },
});

export const { increment } = marketReducer.actions;
export const marketState = (state: RootState) => state.market;

export default marketReducer.reducer;
