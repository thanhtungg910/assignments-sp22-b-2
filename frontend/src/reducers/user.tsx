export {};
const initial: { username: String | null; saveLocal: boolean } = {
	username: null,
	saveLocal: false,
};
const useReducer = (state = initial, action: { type: String; payload: Object }) => {
	switch (action.type) {
		case "SIGN_UP":
			const newItem = { ...state };
			return {};
		case "SAVE_LOCAL":
			return { ...state, saveLocal: action.payload };

		default:
			break;
	}
	return state;
};
export default useReducer;
