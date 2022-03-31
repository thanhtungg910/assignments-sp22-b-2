import { combineReducers } from "redux";
import cartReducer from "./cart";
import useReducer from "./user";
import wishListReducer from "./wishlist";

const rootReducer = combineReducers({
	users: useReducer,
	carts: cartReducer,
	wishList: wishListReducer,
});
export default rootReducer;
