import Matrix from "./components/Matrix";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
	createInitialMatrix,
	changeTriangularMatrixState,
	setInitialRows,
	setInitialColumns,
	toggleTriangular,
	makeFirstTriangular,
} from "./features/matrixActions/matrixStateSlice";
import {
	setShowData,
	resetClosestNumber,
} from "./features/closestNumber/closestNumberSlice";

import { createMatrix } from "./utils/matrixUtils";

import ClosestNumber from "./components/ClosestNumber";
import MatrixActions from "./components/MatrixActions";
import Button from "./components/Button";

export default function App() {
	// redux state values
	const { matrixState, triangularMatrix, isTriangular } = useAppSelector(
		(state) => state.matrixState
	);
	const matrix = matrixState;
	const { rows, columns } = useAppSelector(
		(state) => state.matrixState.initial
	);

	const dispatch = useAppDispatch();

	// create initial matrix
	const create = () => {
		if (!rows && !columns) alert("please provide rows or columns");
		dispatch(createInitialMatrix(createMatrix(rows, columns)));
		dispatch(changeTriangularMatrixState([]));
		dispatch(makeFirstTriangular(false));
		dispatch(setShowData(false));
		if (isTriangular) dispatch(toggleTriangular());
		dispatch(setShowData(false));
		dispatch(resetClosestNumber());
	};

	return (
		<div className='m-5 select-none'>
			<div className='create-matrix'>
				<div className='flex gap-3 justify-center'>
					<input
						className='border border-black'
						type='number'
						onChange={(e) => dispatch(setInitialRows(parseInt(e.target.value)))}
					/>
					<input
						className='border border-black'
						type='number'
						onChange={(e) =>
							dispatch(setInitialColumns(parseInt(e.target.value)))
						}
					/>
				</div>
				<div className='inline-block ml-[50%] translate-x-[-50%] w-auto'>
					<Button variant='green' onClick={create} content='create matrix' />
				</div>
			</div>

			{!isTriangular && <Matrix matrix={matrix} />}
			{isTriangular && <Matrix matrix={triangularMatrix} />}

			{!!matrix.length && (
				<>
					<MatrixActions />
					<ClosestNumber matrix={matrix} />
				</>
			)}
		</div>
	);
}
