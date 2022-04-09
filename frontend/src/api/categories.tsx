// import { getLocal } from "../utils/localstorage";
import instance from "./instance";

const getCategories = () => {
	const url = "/categories";
	return instance.get(url);
};
const getCategory = (slug: String | undefined) => {
	const url = `/categories/${slug}`;
	return instance.get(url);
};
const getProductsByCategory = (
	slug: String | Object,
	page = 0,
	limit = 8,
	order = "desc"
) => {
	const url = `${slug}?page=${page}&limit=${limit}`;
	return instance.get(url);
};
const createCategory = (data: Object) => {
	/* const { accessToken, _id } = getLocal("user");
	const url = `/categories/${_id}`;
	return instance.post(url, data, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	}); */
};
const updateCategory = (slug: String, data: Object) => {
	/* const { accessToken, _id } = getLocal("user");
	const url = `/categories/${_id}/${slug}`;
	return instance.patch(url, data, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	}); */
};
const removeCategory = (slug: String | undefined) => {
	/* const { accessToken, _id } = getLocal("user");
	const url = `/categories/${_id}/${slug}`;
	return instance.delete(url, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	}); */
};
/**
 *
 * @param slug path name
 * @param key search key
 * @param page number
 * @param limit limit products on page
 */
const searchProductsBySlug = (
	slug: String | Object,
	key: String,
	page = 0,
	limit = 8,
	order = "desc"
) => {
	const url = `${slug}?q=${key}&page=${page}&limit=${limit}`;
	return instance.get(url);
};

export {
	getCategories,
	getProductsByCategory,
	searchProductsBySlug,
	createCategory,
	removeCategory,
	getCategory,
	updateCategory,
};
