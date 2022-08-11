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
import { useRef } from "react";

export default function App() {
	// redux state values
	const { matrixState, triangularMatrix, isTriangular } = useAppSelector(
		(state) => state.matrixState
	);
	const matrix = matrixState;
	const { rows, columns } = useAppSelector(
		(state) => state.matrixState.initial
	);

	const inputEl1 = useRef<HTMLInputElement>(null);
	const inputEl2 = useRef<HTMLInputElement>(null);

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
		inputEl1.current && (inputEl1.current.value = "");
		inputEl2.current && (inputEl2.current.value = "");
	};

	return (
		<div className='m-5 select-none text-center'>
			<div className='create-matrix'>
				<div className='flex gap-5 justify-center'>
					<div>
						<span className='font-[500] mr-2'>rows:</span>
						<input
							ref={inputEl1}
							className='border border-black outline-none'
							type='number'
							onChange={(e) =>
								dispatch(setInitialRows(parseInt(e.target.value)))
							}
						/>
					</div>
					<div>
						<span className='font-[500] mr-2'>columns:</span>
						<input
							ref={inputEl2}
							className='border border-black outline-none'
							type='number'
							onChange={(e) =>
								dispatch(setInitialColumns(parseInt(e.target.value)))
							}
						/>
					</div>
				</div>
				<div className='inline-block w-auto mt-4'>
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
