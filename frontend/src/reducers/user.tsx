import { logOut } from "../api/users";
import { removeLocal } from "../utils/localstorage";

const initial: { username: String | null } = {
	username: null,
};
const useReducer = (
	state = initial,
	action: { type: String; payload: Object }
) => {
	switch (action.type) {
		case "SIGN_IN":
			return { ...state, username: action.payload };
		case "SIGN_OUT":
			const signOut = async () => {
				await logOut();
				removeLocal("user");
				removeLocal("refreshToken");
				return { ...state, username: action.payload };
			};
			signOut();
		case "SAVE_LOCAL":
			return { ...state, username: action.payload };

		default:
			break;
	}
	return state;
};
export default useReducer;
