import IProducts from "../interfaces/products";
import { getLocal } from "../utils/localstorage";
import instance from "./instance";
const { accessToken, _id } = getLocal("user");

const getProducts = (page = 0, limit = 5, order = "desc") => {
	const url = `/products?page=${page}&limit=${limit}&order=${order}`;
	return instance.get(url);
};
const getProduct = (slug: String | undefined) => {
	const url = `/products/${slug}`;
	return instance.get(url);
};

const create = (data: IProducts) => {
	const url = "/products/" + _id;
	return instance.post(url, data, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});
};
const update = (data: IProducts) => {
	const url = `/products/${_id}/${data._id}`;
	return instance.put(url, data, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});
};

const remove = (slug: String | undefined) => {
	const url = `/products/${_id}/${slug}`;
	return instance.delete(url, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});
};
const getRelated = (slug: String | undefined) => {
	const url = "/products/related/" + slug;
	return instance.get(url);
};

export { getProducts, getProduct, create, remove, update, getRelated };
