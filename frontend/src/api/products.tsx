import IProducts from "../interfaces/products";
import instance from "./instance";

const getProducts = () => {
	const url = "/products";
	return instance.get(url);
};
const getProduct = (slug: String | undefined) => {
	const url = `/products/${slug}`;
	return instance.get(url);
};
const createProduct = () => {
	const url = "/products";
	return instance.get(url);
};
const create = (data: IProducts) => {
	const url = "/products";
	return instance.post(url, data);
};
const update = (data: IProducts) => {
	const url = `/products/${data._id}`;
	return instance.put(url, data);
};

const remove = (slug: String | undefined) => {
	const url = "/products/" + slug;
	return instance.delete(url);
};

export { getProducts, createProduct, getProduct, create, remove, update };
