import React from 'react';
import Button from '../Button';
import './style.css';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as actions from "../../utils/matrixUtils";
import { changeMatrixState, makeTriangular, toggleTriangular } from "../../features/matrixActions/matrixStateSlice";

const MatrixActions = () => {
	const dispatch = useAppDispatch();

  const { matrixState, triangularMatrix, isTriangular } = useAppSelector(state => state.matrixState);
	const { rows, columns } = useAppSelector(state => state.matrixState.initial);

  let matrix = matrixState;

	const refactor = () => dispatch(changeMatrixState(actions.refactorMatrix(matrix)));

  const sort = () => dispatch(changeMatrixState(actions.sortMatrix(matrix)));
  
  const horizontallyReverse = () => dispatch(changeMatrixState(actions.horizontallyReverseMatrix(matrix)));

  const verticallyReverse = () => dispatch(changeMatrixState(actions.verticallyReverseMatrix(matrix)));

  const triangularize = () => {
    if (rows !== columns) {
      console.error('number of rows and columns have to match');
      return;
    }

    dispatch(makeTriangular(actions.triangularizeMatrix(matrix)));
    dispatch(toggleTriangular());
  };

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

  const runAction = (action: Function): void => {
    if (isTriangular && action.name !== 'triangularize') {
      dispatch(toggleTriangular());
      dispatch(changeMatrixState(triangularMatrix));
      matrix = triangularMatrix;
    }

    action();
  }

	return (
    <div className='actions-container'>
      <Button 
        content='refactor' 
        onClick={() => runAction(refactor)} 
        variant='light-blue'
      />
      <Button 
        content='sorting' 
        onClick={() => runAction(sort)} 
        variant='light-cyan'
      />
      <Button 
        content='triangularize' 
        onClick={() => runAction(triangularize)} 
        variant='green'
      />
      <Button 
        content='reverse horizontally' 
        onClick={() => runAction(horizontallyReverse)} 
        variant='light-grey'
      />
      <Button 
        content='reverse vertically' 
        onClick={() => runAction(verticallyReverse)} 
        variant='warm-yellow'
      />
      <Button 
        content='transpose counterclockwise' 
        onClick={() => runAction(transposeCounterClockwise)} 
        variant='dark-green'
      />
      <Button 
        content='transpose clockwise' 
        onClick={() => runAction(transposeClockwise)} 
        variant='dark-grey'
      />
    </div>
	)
}

export default MatrixActions;