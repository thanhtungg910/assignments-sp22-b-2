import { getLocal } from "../utils/localstorage";
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
const createWishList = (data: any) => {
	const { _id } = getLocal("user");
	const url = `/users/wishlist/${_id}`;
	return instance.put(url, data);
};

export { signup, signin, refreshToken, createTokenAuto, createWishList };
