import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: ff,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
