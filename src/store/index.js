import { configureStore } from "@reduxjs/toolkit";
import { timersReducer } from "./slices/timer";
export const store = configureStore({
  reducer: {
    timersReducer,
  },
});
