const addProduct = (action: Object) => {
	return {
		type: "CREATE_PRODUCT",
		payload: action,
	};
};
const updateProduct = (action: Object) => {
	return {
		type: "UPDATE_PRODUCT",
		payload: action,
	};
};
export { addProduct, updateProduct };
