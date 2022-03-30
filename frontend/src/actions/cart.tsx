const addToCart = (payload: any) => {
	return {
		type: "ADD_TO_CART",
		payload: payload,
	};
};
const removeFromCart = (payload: any) => {
	return {
		type: "ADD_TO_CART",
		payload: payload,
	};
};

export { addToCart, removeFromCart };
