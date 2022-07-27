import React from 'react';
import Button from '../Button';
import './style.css';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  refactorMatrix,
  triangularizeMatrix,
  horizontallyReverseMatrix,
  verticallyReverseMatrix,
  transposeMatrixClockwise,
  transposeMatrixCounterClockwise
} from "../../utils/matrixUtils";
import { changeMatrixState, makeTriangular, toggleTriangular } from "../../features/matrixActions/matrixStateSlice";

const MatrixActions = () => {
  const matrix = useAppSelector(state => state.matrixState.matrixState);
	const {rows, columns} = useAppSelector(state => state.matrixState.initial);
	const dispatch = useAppDispatch();

	const refactor = () => {
    dispatch(changeMatrixState(refactorMatrix(matrix)));
  };
  const triangularize = () => {
    if (rows !== columns) {
      prompt('number of rows and columns have to match');
    } else {
      dispatch(makeTriangular(triangularizeMatrix(matrix)));
      dispatch(toggleTriangular);
    }
  };
  const horizontallyReverse = () => {
    dispatch(changeMatrixState(horizontallyReverseMatrix(matrix)));
  }
  const verticallyReverse = () => {
    dispatch(changeMatrixState(verticallyReverseMatrix(matrix)));
  }
  const transposeClockwise = () => {
    dispatch(changeMatrixState(transposeMatrixClockwise(matrix)));
  }
  const transposeCounterClockwise = () => {
    dispatch(changeMatrixState(transposeMatrixCounterClockwise(matrix)));
  }

	return (
		<div>
			<Button content='refactor' onClick={refactor} />
			<Button content='triangularize' onClick={triangularize} />
			<Button content='refactor' onClick={refactor} />
			<Button content='reverse horizontally' onClick={horizontallyReverse} />
			<Button content='reverse vertically' onClick={verticallyReverse} />
			<Button content='transpose counterclockwise' onClick={transposeCounterClockwise} />
			<Button content='transpose clockwise' onClick={transposeClockwise} />
		</div>
	)
}

export default MatrixActions;