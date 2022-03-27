import { removeLocal } from "../utils/localstorage";

export {};
const initial: { username: String | null } = {
	username: null,
};
const useReducer = (state = initial, action: { type: String; payload: Object }) => {
	switch (action.type) {
		case "SIGN_IN":
			return { ...state, username: action.payload };
		case "SIGN_OUT":
			removeLocal("user");
			removeLocal("refreshToken");
			return { ...state, username: action.payload };
		case "SAVE_LOCAL":
			return { ...state, username: action.payload };

		default:
			break;
	}
	return state;
};
export default useReducer;
