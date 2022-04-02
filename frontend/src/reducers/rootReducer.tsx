import { combineReducers } from "redux";
import cartReducer from "./cart";
import orderReducer from "./order";
import useReducer from "./user";
import wishListReducer from "./wishlist";

const rootReducer = combineReducers({
	users: useReducer,
	carts: cartReducer,
	wishList: wishListReducer,
	orders: orderReducer,
});
export default rootReducer;
