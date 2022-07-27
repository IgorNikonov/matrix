import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IClosestNumberData {
	initialNumber: number;
	row: number;
	column: number;
	closestNumber: number;
	deviation: number;
}

interface IClosestNumberState {
	initialNumber: number;
	row: number;
	column: number;
	closestNumber: number;
	deviation: number;
}

const initialState: IClosestNumberState = {
	initialNumber: 0,
	row: 0,
	column: 0,
	closestNumber: 9999,
	deviation: 0,
}

const closestNumberSlice = createSlice({
	name: 'closestNumberState',
	initialState,
	reducers: {
		setClosestNumber(state, action) {
			state.closestNumber = action.payload.closestNumber;
			state.initialNumber = action.payload.initialNumber;
			state.row = action.payload.row;
			state.column = action.payload.column;
			state.closestNumber = action.payload.closestNumber;
			state.deviation = action.payload.deviation;
		}
	},
});

export const { setClosestNumber } = closestNumberSlice.actions;
export default closestNumberSlice.reducer;