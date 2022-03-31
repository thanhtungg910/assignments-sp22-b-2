import { ICart } from "../interfaces/products";

const addToCart = (payload: ICart) => {
	return {
		type: "ADD_TO_CART",
		payload: { data: payload, current: true },
	};
};
const removeItemInCart = (payload: String) => {
	return {
		type: "REMOVE_ITEM_IN_CART",
		payload: { data: payload, current: true },
	};
};

export { addToCart, removeItemInCart };
