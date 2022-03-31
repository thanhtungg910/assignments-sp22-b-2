import { ICart } from "../interfaces/products";
import { getLocal } from "../utils/localstorage";
const initial_cart: { value: []; total: Number; current: boolean } = {
	value: getLocal("cart") || [],
	total: 0,
	current: false,
};
type Iaction = {
	type: String;
	payload: {
		data: ICart | any;
		current?: boolean;
	};
};

const cartReducer = (state = initial_cart, action: Iaction) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const item: object | any = state.value.find(
				(item: any) => item._id == action.payload.data._id
			);
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
		case "REMOVE_ITEM_IN_CART":
			const exitItem: object | any = state.value.filter((item: any) => {
				return item._id != action.payload.data;
			});
			return { ...state, value: [...exitItem], current: action.payload.current };
		case "INCREASE":
			const increexist: ICart | any = state.value.find(
				(item: { _id: String | any }) => item._id == action.payload.data
			);
			if (!increexist) return;
			increexist.quantity++;
			if (increexist.quantity == 5) {
				increexist.quantity = 5;
			}
			return { ...state };
		case "DECREASE":
			const decreexist: ICart | any = state.value.find(
				(item: { _id: String | any }) => item._id == action.payload.data
			);
			if (!decreexist) return;
			decreexist.quantity--;
			if (decreexist.quantity == 0) {
				const item = state.value.filter(
					(item: { _id: String | any }) => item._id != action.payload.data
				);
				return { ...state, value: [...item] };
			}
			return { ...state };
		case "SET_QUANTITY": {
			const product = state.value.map((item: ICart) =>
				item._id == action.payload.data.id
					? { ...item, quantity: action.payload.data.quantity }
					: item
			);

			return { ...state, value: [...product] };
		}
		default:
			break;
	}
	return state;
};
export default cartReducer;
