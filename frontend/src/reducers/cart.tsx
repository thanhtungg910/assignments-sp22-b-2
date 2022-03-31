import { ICart } from "../interfaces/products";
import { getLocal } from "../utils/localstorage";
const initial_cart: { value: []; totalQuantity: Number; current: boolean } = {
	value: getLocal("cart") || [],
	totalQuantity: 0,
	current: false,
};
type Iaction = {
	type: String;
	payload: {
		data: ICart;
		current: boolean;
	};
};

const cartReducer = (state = initial_cart, action: Iaction) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const item: object | any = state.value.find((item: any) => {
				return item._id == action.payload.data._id;
			});
			if (!item) {
				return {
					...state,
					value: [...state.value, action.payload.data],
					current: action.payload.current,
				};
			} else {
				item.quantity++;
			}
			break;
		case "CHANGE_CURRENT":
			return { ...state, current: action.payload.current };
		default:
			break;
	}
	return state;
};
export default cartReducer;
