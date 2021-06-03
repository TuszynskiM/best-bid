import { configureStore } from "@reduxjs/toolkit";
import marketReducer from "./reducers/market";

export const store = configureStore({
  reducer: {
    market: marketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
