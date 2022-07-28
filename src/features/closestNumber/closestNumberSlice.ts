import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IClosestNumberData {
	initialNumber: number;
	row: number | null;
	column: number | null;
	closestNumber: number;
	deviation: number;
}

interface IClosestNumberState {
	data: IClosestNumberData,
	showData: boolean
}

const initialState: IClosestNumberState = {
	data: {
		initialNumber: 0,
		row: null,
		column: null,
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
		resetClosestNumber(state) {
			state.data = {
				initialNumber: 0,
				row: null,
				column: null,
				closestNumber: 9999,
				deviation: 0,
			}
		},
		setShowData(state, action: PayloadAction<boolean>) {
			state.showData = action.payload;
		}
	}
});

export const { setClosestNumber, setShowData, resetClosestNumber } = closestNumberSlice.actions;
export default closestNumberSlice.reducer;