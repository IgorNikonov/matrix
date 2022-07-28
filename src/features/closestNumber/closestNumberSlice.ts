import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IClosestNumberData {
	initialNumber: number;
	row: number;
	column: number;
	closestNumber: number;
	deviation: number;
}

interface IClosestNumberState {
	data: IClosestNumberData;
	showData: boolean;
}

const initialState: IClosestNumberState = {
	data: {
		initialNumber: 0,
		row: 0,
		column: 0,
		closestNumber: 9999,
		deviation: 0,
	},
	showData: false
}

const closestNumberSlice = createSlice({
	name: 'closestNumberState',
	initialState,
	reducers: {
		setClosestNumber(state, action: PayloadAction<IClosestNumberData>) {
			state.data.closestNumber = action.payload.closestNumber;
			state.data.initialNumber = action.payload.initialNumber;
			state.data.row = action.payload.row;
			state.data.column = action.payload.column;
			state.data.closestNumber = action.payload.closestNumber;
			state.data.deviation = action.payload.deviation;
		},
		setShowData(state, action) {
			state.showData = action.payload;
		}
	}
});

export const { setClosestNumber, setShowData } = closestNumberSlice.actions;
export default closestNumberSlice.reducer;