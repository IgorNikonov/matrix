import { useState } from "react";
import "./App.css";
import Matrix from "./components/Matrix";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { changeMatrixState, makeTriangular } from "./features/matrixActions/matrixStateSlice";

import {
  createMatrix,
  transposeMatrix,
  triangularizeMatrix,
  reverseMatrix
} from "./utils/matrixUtils";

import ClosestNumber from "./components/ClosestNumber";

export default function App() {
  const matrix = useAppSelector((state) => state.matrixState.matrixState);
  const triangularMatrix = useAppSelector(state => state.matrixState.triangularMatrix);
  const dispatch = useAppDispatch();

  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [triangular, setTriangular] = useState(false);


  // click handlers
  const transpose = () => {
    dispatch(changeMatrixState(transposeMatrix(matrix)));
  };
  const create = () => {
    dispatch(changeMatrixState(createMatrix(rows, columns)));
  }
  const triangularize = () => {
    if (rows !== columns) {
      prompt('number of rows and columns have to match')
    } else {
      dispatch(makeTriangular(triangularizeMatrix(matrix)));
      setTriangular(!triangular);
    }
  };
  const reverse = () => {
    dispatch(changeMatrixState(reverseMatrix(matrix)));
  }

  return (
    <div className="App">
      <div className="create-matrix">
        <div>
          <input type="number" onChange={(e) => setRows(parseInt(e.target.value))} />
          <input type="number" onChange={(e) => setColumns(parseInt(e.target.value))} />
        </div>
        <button
          onClick={create}
        >
          create matrix
        </button>
      </div>

      {!triangular && <Matrix matrix={matrix} />}
      {triangular && <Matrix matrix={triangularMatrix} />}

      <div className="btn-container">
        <button className="btn" onClick={transpose}>
          transpose
        </button>
        <button className="btn" onClick={triangularize}>
          triangularize
        </button>
        <button className="btn" onClick={reverse}>
          reverse
        </button>
      </div>
      <ClosestNumber matrix={matrix} />
    </div>
  );
}
