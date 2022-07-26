import { configureStore } from "@reduxjs/toolkit";
import matrixStateReducer from "../features/matrixActions/matrixStateSlice";
import closestNumberReducer from "../features/closestNumber/closestNumberSlice";

export const store = configureStore({
  reducer: {
    matrixState: matrixStateReducer,
    closestNumber: closestNumberReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
