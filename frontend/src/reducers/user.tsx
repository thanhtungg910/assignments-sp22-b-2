export {};
const initial: { username: String | null } = {
	username: null,
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
