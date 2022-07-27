import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMatrixState {
  matrixState: number[][];
  triangularMatrix: number[][];
  initial: {rows?: number, columns?: number};
  isTriangular: boolean;
}

const initialState: IMatrixState = {
  matrixState: [],
  triangularMatrix: [],
  initial: {
    rows: 0,
    columns: 0
  },
  isTriangular: false
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
    },
    setInitialRows(state, action: PayloadAction<number>) {
      state.initial.rows = action.payload
    },
    setInitialColumns(state, action: PayloadAction<number>) {
      state.initial.columns = action.payload
    },
    toggleTriangular(state) {
      state.isTriangular = !state.isTriangular
    }
  }
});

export const { changeMatrixState, makeTriangular, setInitialRows, setInitialColumns, toggleTriangular } = matrixStateSlice.actions;
export default matrixStateSlice.reducer;
