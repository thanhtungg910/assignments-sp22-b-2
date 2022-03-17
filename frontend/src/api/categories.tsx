import instance from "./instance";

const getCategories = () => {
	const url = "/categories";
	return instance.get(url);
};
const getProductsByCategory = (slug: String | Object) => {
	const url = `${slug}`;
	return instance.get(url);
};

export { getCategories, getProductsByCategory };
