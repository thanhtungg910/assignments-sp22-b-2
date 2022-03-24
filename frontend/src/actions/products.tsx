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
		loading: false,
		toggle: true,
		payload: payload,
	};
};
export { addProduct, updateProduct };
