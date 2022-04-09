// import { getLocal } from "../utils/localstorage";
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
	/* 	const { _id } = getLocal("user");
	const url = `/users/wishlist/${_id}`;
	return instance.put(url, data); */
};
const setActiveAccount = (idUser: String, data: { isActive: boolean }) => {
	/* const { accessToken, _id } = getLocal("user");
	const url = `/users/${_id}/${idUser}`;
	return instance.put(url, data, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	}); */
};
const logOut = () => {
	/* try {
		const { accessToken, _id } = getLocal("user");
		const url = `/users/logout/${_id}`;
		return instance.delete(url, {
			headers: {
				authorization: `Bearer ${accessToken}`,
			},
		});
	} catch (error) {
		console.log(error);
	} */
};
const userList = () => {
	/* 	const { accessToken, _id } = getLocal("user");
	const url = `/users/${_id}`;
	return instance.get(url, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	}); */
};

export {
	signup,
	signin,
	refreshToken,
	createTokenAuto,
	createWishList,
	setActiveAccount,
	userList,
	logOut,
};
