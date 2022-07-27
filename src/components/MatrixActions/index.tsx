import React from 'react';
import Button from '../Button';
import './style.css';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as actions from "../../utils/matrixUtils";
import { changeMatrixState, makeTriangular, toggleTriangular } from "../../features/matrixActions/matrixStateSlice";

const MatrixActions = () => {
  const matrix = useAppSelector(state => state.matrixState.matrixState);
	const {rows, columns} = useAppSelector(state => state.matrixState.initial);
	const dispatch = useAppDispatch();

	const refactor = () => {
    dispatch(changeMatrixState(actions.refactorMatrix(matrix)));
  };
  const triangularize = () => {
    if (rows !== columns) {
      alert('number of rows and columns have to match');
    } else {
      dispatch(makeTriangular(actions.triangularizeMatrix(matrix)));
      dispatch(toggleTriangular);
    }
  };
  const horizontallyReverse = () => {
    dispatch(changeMatrixState(actions.horizontallyReverseMatrix(matrix)));
  }
  const verticallyReverse = () => {
    dispatch(changeMatrixState(actions.verticallyReverseMatrix(matrix)));
  }
  const transposeClockwise = () => {
    if (rows !== columns) {
      alert('number of rows and columns have to match');
    } else {
      dispatch(changeMatrixState(actions.transposeMatrixClockwise(matrix)));
    }
  }
  const transposeCounterClockwise = () => {
    if (rows !== columns) {
      alert('number of rows and columns have to match');
    } else {
      dispatch(changeMatrixState(actions.transposeMatrixCounterClockwise(matrix)));
    }
  }

	return (
    <div className='actions-container'>
      <Button content='refactor' onClick={refactor} variant='light-blue' />
      <Button content='triangularize' onClick={triangularize} variant='green' />
      <Button content='reverse horizontally' onClick={horizontallyReverse} variant='light-grey' />
      <Button content='reverse vertically' onClick={verticallyReverse} variant='warm-yellow' />
      <Button content='transpose counterclockwise' onClick={transposeCounterClockwise} variant='dark-green' />
      <Button content='transpose clockwise' onClick={transposeClockwise} variant='dark-grey' />
    </div>
	)
}

export default MatrixActions;