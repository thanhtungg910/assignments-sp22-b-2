import { getLocal } from "../utils/localstorage";
import instance from "./instance";
const createOrderProducts = (data: Object) => {
	const url: string = `/carts/order`;
	return instance.post(url, data);
};
const orderList = () => {
	// const { accessToken, _id } = getLocal("user");
	const url = `/carts/order`; ///${_id}
	return instance.get(
		url /* , {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	} */
	);
};
const updateOrder = (id: String, data: Object) => {
	// const { accessToken, _id } = getLocal("user");
	const url = `/carts/order/${id}`; ///${_id}
	return instance.put(
		url,
		data /* , {
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	} */
	);
};

export { createOrderProducts, orderList, updateOrder };
