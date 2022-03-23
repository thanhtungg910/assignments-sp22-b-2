import { combineReducers } from "redux";
import useReducer from "./user";

const rootReducer = combineReducers({
	users: useReducer,
});
export default rootReducer;
