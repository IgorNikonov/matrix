import "./App.css";
import Matrix from "./components/Matrix";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { createInitialMatrix, changeTriangularMatrixState, setInitialRows, setInitialColumns, toggleTriangular, makeFirstTriangular } from "./features/matrixActions/matrixStateSlice";
import { setShowData } from "./features/closestNumber/closestNumberSlice";

import { createMatrix } from "./utils/matrixUtils";

import ClosestNumber from "./components/ClosestNumber";
import MatrixActions from "./components/MatrixActions";

export default function App() {
  // redux state values
  const {matrixState, triangularMatrix, isTriangular} = useAppSelector(state => state.matrixState);
  const matrix = matrixState;
  const {rows, columns} = useAppSelector(state => state.matrixState.initial);

  const dispatch = useAppDispatch();

  // create initial matrix
  const create = () => {
    dispatch(createInitialMatrix(createMatrix(rows, columns)));
    dispatch(changeTriangularMatrixState([]));
    dispatch(makeFirstTriangular(false));
    if (isTriangular) dispatch(toggleTriangular());
    dispatch(setShowData(false));
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

      {!!matrix.length && 
        <>
          <MatrixActions />
          <ClosestNumber matrix={matrix} />
        </>
      }
    </div>
  );
}
