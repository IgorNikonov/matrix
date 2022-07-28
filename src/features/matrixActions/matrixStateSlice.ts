import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMatrixState {
  matrixState: number[][];
  triangularMatrix: number[][];
  initial: {rows?: number, columns?: number};
  isTriangular: boolean;
  firstTriangular: boolean;
}

const initialState: IMatrixState = {
  matrixState: [],
  triangularMatrix: [],
  initial: {
    rows: 0,
    columns: 0
  },
  isTriangular: false,
  firstTriangular: false
};

const matrixStateSlice = createSlice({
  name: "matrixState",
  initialState,
  reducers: {
    createInitialMatrix(state, action: PayloadAction<number[][]>){
      state.matrixState = action.payload
    },
    changeMatrixState(state, action: PayloadAction<number[][]>) {
      state.matrixState = action.payload;
    },
    changeTriangularMatrixState(state, action: PayloadAction<number[][]>) {
      state.triangularMatrix = action.payload;
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
    },
    makeFirstTriangular(state, action: PayloadAction<boolean>) {
      state.firstTriangular = action.payload;
    }
  }
});

export const { createInitialMatrix, changeMatrixState, makeTriangular, setInitialRows, setInitialColumns, toggleTriangular, makeFirstTriangular, changeTriangularMatrixState } = matrixStateSlice.actions;
export default matrixStateSlice.reducer;
