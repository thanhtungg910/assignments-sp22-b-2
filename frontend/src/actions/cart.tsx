import { ICart } from "../interfaces/products";

const addToCart = (payload: ICart) => {
	return {
		type: "ADD_TO_CART",
		payload: { data: payload, current: true },
	};
};
const resetCart = () => {
	return { type: "RESET_CART" };
};
const removeItemInCart = (payload: String) => {
	return {
		type: "REMOVE_ITEM_IN_CART",
		payload: { data: payload, current: true },
	};
};
const increase = (payload: String) => {
	return { type: "INCREASE", payload: { data: payload } };
};
const decrease = (payload: String) => {
	return { type: "DECREASE", payload: { data: payload } };
};

const setQty = (payload: Object) => {
	return { type: "SET_QUANTITY", payload: { data: payload } };
};

export { addToCart, removeItemInCart, increase, decrease, setQty, resetCart };
