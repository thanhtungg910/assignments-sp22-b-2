import { combineReducers } from "redux";
import cartReducer from "../reducers/cart";
import orderReducer from "../reducers/order";
import useReducer from "../reducers/user";
import wishListReducer from "../reducers/wishlist";

const rootReducer = combineReducers({
	users: useReducer,
	carts: cartReducer,
	wishList: wishListReducer,
	orders: orderReducer,
});
export default rootReducer;
