import { useAppDispatch, useAppSelector } from "../../app/hook";
import Shopping from "../../components/cart/Shopping";
import { ICart } from "../../interfaces/products";
import { setQtyInCart } from "../../reducers/cart";

type Props = {};

const ShopCart = (props: Props) => {
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
				<h1>Not products</h1>
			)}
		</div>
	);
};

export default ShopCart;
