import instance from "./instance";

const signup = (data: Object) => {
	const url = `/users/signup`;
	return instance.post(url, data);
};

const signin = (data: Object) => {
	const url = `/users/signin`;
	return instance.post(url, data);
};
export { signup, signin };
