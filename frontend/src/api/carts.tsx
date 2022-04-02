import instance from "./instance";
const createOrderProducts = (data: Object) => {
	const url: string = `/carts/order`;
	return instance.post(url, data);
};
export { createOrderProducts };
