import { useAppDispatch, useAppSelector } from "../../app/hook";
import Shopping from "../../components/cart/Shopping";
import { ICart } from "../../interfaces/products";
import { setQtyInCart } from "../../slices/cart";

const ShopCart = () => {
	const cartList: ICart[] = useAppSelector((state: any) => [
		...state.carts.value,
	]);
	const dispatch = useAppDispatch();

	const handleChangeQty = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const payload = { quantity: +e.target.value, id: e.target.dataset.id };
		dispatch(setQtyInCart(payload));
	};
	return (
		<div className="py-12">
			{cartList && cartList.length > 0 ? (
				<Shopping products={cartList} handleChangeQty={handleChangeQty} />
			) : (
				<img
					className="mx-auto"
					src="https://cdn.dribbble.com/users/693462/screenshots/2380486/media/b497f28a6d8d2a9323ad7cfc38753bfb.png?compress=1&resize=400x300&vertical=top"
				/>
			)}
		</div>
	);
};

export default ShopCart;
