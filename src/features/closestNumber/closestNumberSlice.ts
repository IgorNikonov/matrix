import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IClosestNumberState {
	data: {
		initialNumber: number;
		row: number;
		column: number;
		closestNumber: number;
		deviation: number;
	}
}

const initialState: IClosestNumberState = {
	data:{
		initialNumber: 0,
		row: 0,
		column: 0,
		closestNumber: 9999,
		deviation: 0,
	}
}

const closestNumberSlice = createSlice({
	name: 'closestNumberState',
	initialState,
	reducers: {
		setClosestNumber(state, action) {
			state.data.closestNumber = action.payload.closestNumber;
			state.data.initialNumber = action.payload.initialNumber;
			state.data.row = action.payload.row;
			state.data.column = action.payload.column;
			state.data.closestNumber = action.payload.closestNumber;
			state.data.deviation = action.payload.deviation;
		}
	},
});

export const { setClosestNumber } = closestNumberSlice.actions;
export default closestNumberSlice.reducer;