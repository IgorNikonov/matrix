import "./App.css";
import Matrix from "./components/Matrix";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { createInitialMatrix, changeMatrixState, setInitialRows, setInitialColumns } from "./features/matrixActions/matrixStateSlice";

import { createMatrix } from "./utils/matrixUtils";

import ClosestNumber from "./components/ClosestNumber";
import MatrixActions from "./components/MatrixActions";
import { SyntheticEvent } from "react";
import React from "react";

export default function App() {
  // redux state values
  const matrix = useAppSelector((state) => state.matrixState.matrixState);
  const triangularMatrix = useAppSelector(state => state.matrixState.triangularMatrix);
  const isTriangular = useAppSelector(state => state.matrixState.isTriangular);
  const {rows, columns} = useAppSelector(state => state.matrixState.initial);

  const dispatch = useAppDispatch();

  // create initial matrix
  const create = () => {
    dispatch(createInitialMatrix(createMatrix(rows, columns)));
  }

  type VariantType = 'blue' | 'red' | 'green';

  function drawByType(color: VariantType) {
      return color;
  }

  // drawByType('black');
  // drawByType('green');

  enum VariantEnum {
      blue = 'blue', 
      red = 'red',
      green = 'green'
  }

  function drawByEnum(color: VariantEnum) {
    return color;
  }

  // drawByEnum('black');
  // drawByEnum('green');
  // drawByEnum(VariantEnum.green)

  console.log(Object.values(VariantEnum))

  const getAvailableColors = <T extends unknown>(colorsEnum: T) => Object.values(colorsEnum as object)

  console.log(getAvailableColors<typeof VariantEnum>(VariantEnum), typeof VariantEnum);

  const setColor = (color: any) => {
    if (getAvailableColors<typeof VariantEnum>(VariantEnum).includes(color)) {
      return setBGColor(drawByEnum(color));
    }

    alert(`Unfortunately, this color is not available. You can use only these colors: ${getAvailableColors<typeof VariantEnum>(VariantEnum)}`);
  }

  const [value, setValue] = React.useState('');
  const [bgColor, setBGColor] = React.useState('');

  const handlePseudoSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setColor(value);
    }
    return;
  }

  return (
    <div className="App" style={{backgroundColor: bgColor}}>
      <div className="create-matrix">
        <div>
          <input type="number" onChange={(e) => dispatch(setInitialRows(parseInt(e.target.value)))} />
          <input type="number" onChange={(e) => dispatch(setInitialColumns(parseInt(e.target.value)))} />
          <input type='text' onChange={(e) => setValue(e.target.value)} onKeyDown={handlePseudoSubmit} value={value}/>
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
