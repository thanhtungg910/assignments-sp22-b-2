const signup = (payload: String | Number | Object) => {
	return { type: "SIGN_UP", payload: payload };
};
const login = (payload: String | Number | Object) => {
	return { type: "LOG_IN", payload: payload };
};
const logout = (payload: String | Number | Object) => {
	return { type: "LOG_OUT", payload: payload };
};
export { login, logout, signup };
