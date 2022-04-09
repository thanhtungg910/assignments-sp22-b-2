import { combineReducers } from "redux";
import cartReducer from "../slices/cart";
import orderReducer from "../slices/order";
import useReducer from "../slices/user";
import wishListReducer from "../slices/wishlist";

const rootReducer = combineReducers({
	users: useReducer,
	carts: cartReducer,
	wishList: wishListReducer,
	orders: orderReducer,
});
export default rootReducer;
