import { getLocal } from "../utils/localstorage";

export {};
const initial: { _id: String }[] = getLocal("wishList") || [];
const wishListReducer = (state = initial, action: { type: String; payload: String }) => {
	switch (action.type) {
		case "ADD_WISH_LIST":
			const newWishList = [...state];
			return [...newWishList, action.payload];
		case "REMOVE_ITEM":
			const exititem = state.filter((item: any) => item != action.payload) || [];
			return [...exititem];
		case "ADD_WISH_LIST_AS_USER":
			const wishListClone = [...state];
			return [...wishListClone, ...action.payload];

		default:
			return state;
	}
};
export default wishListReducer;
