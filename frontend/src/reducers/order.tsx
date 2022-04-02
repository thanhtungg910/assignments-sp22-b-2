export {};
/**
 * {
		name: null,
		address: null,
		phone: null,
		quantity: null,
		buy: null,
		userId: null,
	}
 */
const initial = {
	status: true,
	value: [
		// {
		// 	name: null,
		// 	address: null,
		// 	phone: null,
		// 	quantity: null,
		// 	buy: null,
		// 	userId: null,
		// },
	],
};
const orderReducer = (
	state = initial,
	action: {
		type: String;
		payload: {
			name: String;
			address: String;
			phone: Number;
			quantity: Number;
			buy: String;
			userId: String;
			price: Number;
		};
	}
) => {
	switch (action.type) {
		case "ADD_ORDER":
			const newOrder = { ...state, value: [...state.value] };
			return {
				...newOrder,
				value: [
					...newOrder.value,
					{
						name: action.payload.name,
						address: action.payload.address,
						phone: action.payload.phone,
						quantity: action.payload.quantity,
						buy: action.payload.buy,
						userId: action.payload.userId,
						price: action.payload.price,
					},
				],
			};

		default:
			return state;
	}
};
export default orderReducer;
