import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMatrixState {
  matrixState: number[][];
  triangularMatrix: number[][];
}

const initialState: IMatrixState = {
  matrixState: [],
  triangularMatrix: []
};

const matrixStateSlice = createSlice({
  name: "matrixState",
  initialState,
  reducers: {
    changeMatrixState(state, action: PayloadAction<number[][]>) {
      state.matrixState = action.payload;
    },
    makeTriangular(state, action: PayloadAction<number[][]>) {
      state.triangularMatrix = action.payload;
    }
  }
});

export const { changeMatrixState, makeTriangular } = matrixStateSlice.actions;
export default matrixStateSlice.reducer;
