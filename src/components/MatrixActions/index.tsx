import React from "react";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as utils from "../../utils/matrixUtils";
import {
	changeMatrixState,
	makeFirstTriangular,
	makeTriangular,
	toggleTriangular,
	changeTriangularMatrixState,
} from "../../features/matrixActions/matrixStateSlice";

const MatrixActions = () => {
	const { matrixState, triangularMatrix, firstTriangular } = useAppSelector(
		(state) => state.matrixState
	);
	const matrix = matrixState;

	const { rows, columns } = useAppSelector(
		(state) => state.matrixState.initial
	);
	const dispatch = useAppDispatch();

	const refactor = () => {
		dispatch(changeMatrixState(utils.refactorMatrix(matrix)));
		dispatch(
			changeTriangularMatrixState(utils.refactorMatrix(triangularMatrix))
		);
	};
	const triangularize = () => {
		if (rows !== columns) {
			alert("number of rows and columns have to match");
		} else {
			if (!firstTriangular) {
				dispatch(makeTriangular(utils.triangularizeMatrix(matrix)));
				dispatch(makeFirstTriangular(true));
			}
			dispatch(toggleTriangular());
		}
	};
	const horizontallyReverse = () => {
		dispatch(changeMatrixState(utils.horizontallyReverseMatrix(matrix)));
		dispatch(
			changeTriangularMatrixState(
				utils.horizontallyReverseMatrix(triangularMatrix)
			)
		);
	};
	const verticallyReverse = () => {
		dispatch(changeMatrixState(utils.verticallyReverseMatrix(matrix)));
		dispatch(
			changeTriangularMatrixState(
				utils.verticallyReverseMatrix(triangularMatrix)
			)
		);
	};
	const transposeClockwise = () => {
		if (rows !== columns) {
			alert("number of rows and columns have to match");
		} else {
			dispatch(changeMatrixState(utils.transposeMatrixClockwise(matrix)));
			dispatch(
				changeTriangularMatrixState(
					utils.transposeMatrixClockwise(triangularMatrix)
				)
			);
		}
	};
	const transposeCounterClockwise = () => {
		if (rows !== columns) {
			alert("number of rows and columns have to match");
		} else {
			dispatch(
				changeMatrixState(utils.transposeMatrixCounterClockwise(matrix))
			);
			dispatch(
				changeTriangularMatrixState(
					utils.transposeMatrixCounterClockwise(triangularMatrix)
				)
			);
		}
	};

	return (
		<div className='flex justify-center flex-wrap'>
			<Button content='refactor' onClick={refactor} variant='light-blue' />
			<Button content='triangularize' onClick={triangularize} variant='green' />
			<Button
				content='reverse horizontally'
				onClick={horizontallyReverse}
				variant='light-grey'
			/>
			<Button
				content='reverse vertically'
				onClick={verticallyReverse}
				variant='warm-yellow'
			/>
			<Button
				content='transpose counterclockwise'
				onClick={transposeCounterClockwise}
				variant='dark-green'
			/>
			<Button
				content='transpose clockwise'
				onClick={transposeClockwise}
				variant='dark-grey'
			/>
		</div>
	);
};

export default MatrixActions;
