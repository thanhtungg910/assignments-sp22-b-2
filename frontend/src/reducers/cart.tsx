import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "../interfaces/products";
type Iaction = {
	type: String;
	payload: {
		data: ICart | any;
		current?: boolean;
	};
};
const initialState = {
	value: [],
	total: 0,
	current: false,
} as any;
const cartSlice = createSlice({
	name: "carts",
	initialState,
	reducers: {
		addToCart(state, action: Iaction) {
			const item: object | any = state.value.find(
				(item: any) => item._id == action.payload.data._id
			);
			if (item) {
				item.quantity += 1;
			} else {
				state.value.push(action.payload.data);
				state.current = action.payload.current;
			}
		},
		changeCurrent(state, action) {
			state.current = action.payload.current;
		},
		removeItemCart(state, action: Iaction) {
			state.value = state.value.filter(
				(item: any) => item._id != action.payload
			);
		},
		setQtyInCart(state, action) {
			state.value = state.value.map((item: ICart) =>
				item._id == action.payload.id
					? { ...item, quantity: action.payload.quantity }
					: item
			);
		},
		resetCart() {
			return { value: [], total: 0, current: false };
		},
	},
});
export const {
	addToCart,
	removeItemCart,
	setQtyInCart,
	resetCart,
	changeCurrent,
} = cartSlice.actions;
export default cartSlice.reducer;
