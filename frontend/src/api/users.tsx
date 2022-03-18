import instance from "./instance";

const signup = (data: Object) => {
	const url = `/signup`;
	return instance.post(url);
};

const signin = (data: Object) => {
	const url = `/signin`;
	return instance.post(url);
};
export { signup, signin };
