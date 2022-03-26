import IProducts from "../interfaces/products";
import { getLocal } from "../utils/localstorage";
import instance from "./instance";
const { accessToken } = getLocal("user");

const getProducts = () => {
	const url = "/products";
	return instance.get(url);
};
const getProduct = (slug: String | undefined) => {
	const url = `/products/${slug}`;
	return instance.get(url);
};

const create = (data: IProducts) => {
	const url = "/products";
	return instance.post(url, data, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});
};
const update = (data: IProducts) => {
	const url = `/products/${data._id}`;
	return instance.put(url, data, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});
};

const remove = (slug: String | undefined) => {
	const url = "/products/" + slug;
	return instance.delete(url, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});
};

export { getProducts, getProduct, create, remove, update };
