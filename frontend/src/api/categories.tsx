import instance from "./instance";

const getCategories = () => {
	const url = "/categories";
	return instance.get(url);
};
const getProductsByCategory = (slug: String | Object, page = 0, limit = 8, order = "desc") => {
	const url = `${slug}?page=${page}&limit=${limit}`;
	return instance.get(url);
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

export { getCategories, getProductsByCategory, searchProductsBySlug };
