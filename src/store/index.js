import { configureStore } from "@reduxjs/toolkit";
import { timersReducer } from "./slices/timers";
export const store = configureStore({
    reducer: {
      timersReducer,
    },
  });