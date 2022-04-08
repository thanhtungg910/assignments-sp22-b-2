import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	status: true,
	value: [],
} as {
	status: boolean;
	value: {
		name: String;
		address: String;
		phone: Number;
		quantity: Number;
		buy: String;
		userId: String;
		price: Number;
		color: String;
		size: String;
	}[];
};
const orderSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {
		addOrder(state, action) {
			state.value.push(...action.payload);
		},
		resetOrder: () => initialState,
	},
});
export const { addOrder, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
