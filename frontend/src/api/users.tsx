import instance from "./instance";

const signup = (data: Object) => {
	const url = `/users/signup`;
	return instance.post(url, data);
};

const signin = (data: Object | undefined) => {
	const url = `/users/signin`;
	return instance.post(url, data);
};

const refreshToken = (token: String) => {
	try {
		const url = "/refreshtoken";
		return instance.post(url, token);
	} catch (error) {}
};

const createTokenAuto = () => {
	return instance.interceptors.request.use((config) => {
		console.log(config);
	});
};

export { signup, signin, refreshToken, createTokenAuto };
