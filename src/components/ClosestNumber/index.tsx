import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setClosestNumber, setShowData } from '../../features/closestNumber/closestNumberSlice';
import { findClosestNumber } from '../../utils/matrixUtils';
import Button from '../Button';

interface IClosestNumberProps {
	matrix: number[][];
}

const ClosestNumber: React.FC<IClosestNumberProps> = ({matrix}) => {
	const [userInput, setUserInput] = useState(0);

	const {initialNumber, row, column, closestNumber, deviation} = useAppSelector(state => state.closestNumber.data);
	const showData = useAppSelector(state => state.closestNumber.showData);
	const dispatch = useAppDispatch();

	const handleShowData = () => {
		dispatch(setClosestNumber(findClosestNumber(matrix, userInput)));
		dispatch(setShowData(true));
	}

	return (
		<div>
			<input type="number" onChange={(e) => setUserInput(parseInt(e.target.value))} />
			<Button content='find closest number' variant='pale-red' onClick={handleShowData} />
			<br />
			{showData &&
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