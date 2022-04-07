import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { decrease, increase, setQty } from "../../actions/cart";
import Shopping from "../../components/cart/Shopping";
import { getLocal } from "../../utils/localstorage";

type Props = {};

const ShopCart = (props: Props) => {
	const { value } = useSelector(
		(state: { carts: { value: [] } }) => state.carts
	);
	const dispatch = useDispatch();
	const handleIncrease = (id: String) => {
		dispatch(increase(id));
	};
	const handleDecrease = (id: String) => {
		dispatch(decrease(id));
	};
	const handleChangeQty = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setQty({ quantity: +e.target.value, id: e.target.dataset.id }));
	};
	return (
		<div className="py-12">
			{value && value.length > 0 ? (
				<Shopping
					products={value}
					handleIncrease={handleIncrease}
					handleDecrease={handleDecrease}
					handleChangeQty={handleChangeQty}
				/>
			) : (
				<Navigate to="/products" />
			)}
		</div>
	);
};

export default ShopCart;
