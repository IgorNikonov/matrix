import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setClosestNumber } from '../../features/closestNumber/closestNumberSlice';
import { findClosestNumber } from '../../utils/matrixUtils'

interface IClosestNumberProps {
	matrix: number[][];
}

const ClosestNumber: React.FC<IClosestNumberProps> = ({matrix}) => {
	const [userInput, setUserInput] = useState(0);
	const [clicked, setClicked] = useState(false);

	const {initialNumber, row, column, closestNumber, deviation} = useAppSelector(state => state.closestNumber.data);
	const dispatch = useAppDispatch();

	const clickHandler = () => {
		dispatch(setClosestNumber(findClosestNumber(matrix, userInput)));
		setClicked(true);
	}

	return (
		<div>
			<input type="number" onChange={(e) => setUserInput(parseInt(e.target.value))} />
			<button onClick={clickHandler}>find closest number</button>
			<br />
			{clicked &&
				<div>
					<p>initial number: {initialNumber}</p>
					<p>row: {row}</p>
					<p>column: {column}</p>
					<p>closestNumber: {closestNumber}</p>
					<p>deviation: {deviation}</p>
				</div>
			}
		</div>
	)
}

export default ClosestNumber