const addOrder = (payload: {
	name: String;
	address: String;
	phone: Number;
	quantity: Number;
	buy: String;
	userId: String;
	price: Number;
}) => {
	return { type: "ADD_ORDER", payload: payload };
};
const removeOrder = (payload: Object) => {
	return { type: "ADD_ORDER", payload: payload };
};
export { addOrder, removeOrder };
