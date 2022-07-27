import { useState } from "react";
import "./App.css";
import Matrix from "./components/Matrix";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { changeMatrixState, setInitialRows, setInitialColumns } from "./features/matrixActions/matrixStateSlice";

import { createMatrix } from "./utils/matrixUtils";

import ClosestNumber from "./components/ClosestNumber";
import MatrixActions from "./components/MatrixActions";

export default function App() {
  // redux state values
  const matrix = useAppSelector((state) => state.matrixState.matrixState);
  const triangularMatrix = useAppSelector(state => state.matrixState.triangularMatrix);
  const isTriangular = useAppSelector(state => state.matrixState.isTriangular);
  const {rows, columns} = useAppSelector(state => state.matrixState.initial);

  const dispatch = useAppDispatch();

  // create initial matrix
  const create = () => {
    dispatch(changeMatrixState(createMatrix(rows, columns)));
  }

  return (
    <div className="App">
      <div className="create-matrix">
        <div>
          <input type="number" onChange={(e) => dispatch(setInitialRows(parseInt(e.target.value)))} />
          <input type="number" onChange={(e) => dispatch(setInitialColumns(parseInt(e.target.value)))} />
        </div>
        <button
          onClick={create}
        >
          create matrix
        </button>
      </div>

      {!isTriangular && <Matrix matrix={matrix} />}
      {isTriangular && <Matrix matrix={triangularMatrix} />}


      {matrix.length && 
        <>
          <MatrixActions />
          <ClosestNumber matrix={matrix} />
        </>
      }
    </div>
  );
}
