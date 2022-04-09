import { getLocal } from "../utils/localstorage";
import instance from "./instance";
const createOrderProducts = (data: Object) => {
	const url: string = `/carts/order`;
	return instance.post(url, data);
};
const orderList = () => {
	const { accessToken, _id } = getLocal("user");
	const url = `/carts/order/${_id}`; ///${_id}
	return instance.get(url, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});
};
const updateOrder = (
	id: String,
	_id: String | null,
	accessToken: String | null,
	data: Object
) => {
	const url = `/carts/order/${_id}/${id}`; ///${_id}
	return instance.put(url, data, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});
};
const overViewOrder = (userId?: String) => {
	const { accessToken, _id } = getLocal("user");
	const url = `/carts/order/${_id}/${userId}`;
	return instance.get(url, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});
};
const overViewOrderClient = (
	userId: String | null,
	accessToken: String | null
) => {
	const url: string = `/carts/order/${userId}/${userId}`;
	return instance.get(url, {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});
};

export {
	createOrderProducts,
	orderList,
	updateOrder,
	overViewOrder,
	overViewOrderClient,
};
