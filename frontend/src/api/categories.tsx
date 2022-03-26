import instance from "./instance";

const getCategories = () => {
	const url = "/categories";
	return instance.get(url);
};
const getProductsByCategory = (slug: String | Object) => {
	const url = `${slug}`;
	return instance.get(url);
};
/**
 *
 * @param slug path name
 * @param key search key
 */
const searchProductsBySlug = (slug: String | Object, key: String) => {
	const url = `${slug}?q=${key}`;
	return instance.get(url);
};

export { getCategories, getProductsByCategory, searchProductsBySlug };
