const addProduct = (payload: Object) => {
	return {
		type: "CREATE_PRODUCT",
		loading: false,
		toggle: true,
		payload: payload,
	};
};
const updateProduct = (payload: Object) => {
	return {
		type: "UPDATE_PRODUCT",
		payload: payload,
	};
};
export { addProduct, updateProduct };
