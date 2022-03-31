const addToCart = (payload: any) => {
	return {
		type: "ADD_TO_CART",
		payload: { data: payload, current: true },
	};
};
const removeFromCart = (payload: any) => {
	return {
		type: "ADD_TO_CART",
		payload: payload,
	};
};

export { addToCart, removeFromCart };
