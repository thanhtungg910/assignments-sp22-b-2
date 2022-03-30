import { getLocal } from "../utils/localstorage";
const initial_cart = {
	value: getLocal("cart") || [],
	totalQuantity: 0,
};

const cartReducer = (state = initial_cart, action: any) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const item: object | any = state.value.find((item: any) => {
				return item._id == action.payload._id;
			});
			if (!item) {
				return { ...state, value: [...state.value, action.payload] };
			} else {
				item.quantity++;
			}
			break;
		default:
			break;
	}
	return state;
};
export default cartReducer;
