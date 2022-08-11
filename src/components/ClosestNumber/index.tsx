import React, { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
	setClosestNumber,
	setShowData,
} from "../../features/closestNumber/closestNumberSlice";
import { findClosestNumber } from "../../utils/matrixUtils";
import Button from "../Button";

interface IClosestNumberProps {
	matrix: number[][];
}

const ClosestNumber: React.FC<IClosestNumberProps> = ({ matrix }) => {
	const [userInput, setUserInput] = useState(0);

	const { initialNumber, row, column, closestNumber, deviation } =
		useAppSelector((state) => state.closestNumber.data);

	const showData = useAppSelector((state) => state.closestNumber.showData);
	const dispatch = useAppDispatch();

	const inputEl = useRef<HTMLInputElement>(null);

	const handleShowData = () => {
		dispatch(setClosestNumber(findClosestNumber(matrix, userInput)));
		dispatch(setShowData(true));
		inputEl.current && (inputEl.current.value = "");
	};

	return (
		<div className='mt-5'>
			<span className='font-[500] mr-2'>your number:</span>
			<input
				ref={inputEl}
				className='border border-black outline-none'
				type='number'
				onChange={(e) => setUserInput(parseInt(e.target.value))}
			/>
			<div className='flex justify-center mt-2'>
				<Button
					content='find closest number'
					variant='pale-red'
					onClick={handleShowData}
				/>
			</div>
			<br />
			{showData && (
				<div>
					<p>initial number: {initialNumber}</p>
					<p>row: {row}</p>
					<p>column: {column}</p>
					<p>closestNumber: {closestNumber}</p>
					<p>deviation: {deviation}</p>
				</div>
			)}
		</div>
	);
};

export default ClosestNumber;
