import instance from "./instance";

const getProducts = () => {
	const url = "/products";
	return instance.get(url);
};
const createProduct = () => {
	const url = "/products";
	return instance.get(url);
};
export { getProducts, createProduct };
