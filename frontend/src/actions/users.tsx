const signup = (payload: String | Number | Object) => {
	return { type: "SIGN_UP", payload: payload };
};
const login = (payload: String | Number | Object) => {
	return { type: "SIGN_IN", payload: payload };
};
const logout = (payload: String | Number | Object) => {
	return { type: "SIGN_OUT", payload: payload };
};
const localStorage = (payload: String | Number | Object) => {
	return { type: "SAVE_LOCAL", payload: payload };
};
export { login, logout, signup, localStorage };
