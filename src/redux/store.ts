import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../redux/Weather/slice.ts";

const store = configureStore({
  reducer: weatherReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
