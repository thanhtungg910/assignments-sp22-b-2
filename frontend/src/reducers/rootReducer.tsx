import { combineReducers } from "redux";
import cartReducer from "./cart";
import useReducer from "./user";

const rootReducer = combineReducers({
	users: useReducer,
	carts: cartReducer,
});
export default rootReducer;
