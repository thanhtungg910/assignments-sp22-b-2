export {};
const initial: { email: String | null; username: String | null; password: String | null } = {
	username: null,
	email: null,
	password: null,
};
const useReducer = (state = initial, action: { type: String; payload: Object }) => {
	switch (action.type) {
		case "SIGN_UP":
			const newItem = { ...state };
			return {};

		default:
			break;
	}
	return state;
};
export default useReducer;
