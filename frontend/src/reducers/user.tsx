export {};
const initial: { email: null } = {
	email: null,
};
const useReducer = (state = initial, action: { type: String; payload: Object }) => {
	switch (action.type) {
		case "LOG_IN":
			break;

		default:
			break;
	}
	return state;
};
export default useReducer;
