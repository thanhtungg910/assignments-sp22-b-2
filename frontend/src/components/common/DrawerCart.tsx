import * as React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Card, CardContent, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ICart } from "../../interfaces/products";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { removeItemCart } from "../../slices/cart";
// import { removeItemInCart } from "../../actions/cart";

interface IDrawerCart {
	open: boolean;
	toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerCart: React.FC<IDrawerCart> = ({
	open,
	toggleDrawer,
}: IDrawerCart) => {
	const cartList: ICart[] = useAppSelector((state: any) => [
		...state.carts.value,
	]);
	const [total, setTotal] = React.useState<Number>(0);
	const dispatch = useAppDispatch();
	const handleDraw = () => {
		toggleDrawer(false);
	};
	const handleRemove = (id: String) => {
		dispatch(removeItemCart(id));
	};

	React.useEffect(() => {
		const currTotal: Number = cartList.reduce(
			(current, { quantity, price }) => current + price * quantity,
			0
		);
		setTotal(currTotal);
		return () => setTotal(0);
	}, [cartList]);

	return (
		<Drawer anchor={"right"} open={open} onClose={toggleDrawer}>
			<List sx={{ minWidth: 400 }} className="overflow-hidden overflow-y-auto">
				<h1 className="font-bold text-lg text-center">
					Item in cart ({cartList.length})
				</h1>
				{cartList &&
					cartList.length > 0 &&
					cartList.map((item, index: React.Key) => (
						<Card key={index}>
							<CardContent className="flex gap-1">
								<Box className="w-[203px]">
									<img
										srcSet={`${item.image}?w=164&h=auto&fit=crop&auto=format&dpr=2 2x`}
										className="object-cover"
									/>
								</Box>
								<Box className="flex flex-col" onClick={handleDraw}>
									<strong className="font-bold text-lg underline inline-block">
										{item.title}
									</strong>
									<Typography variant="caption">Price: {item.price}</Typography>
									<Typography variant="caption">Color: {item.color}</Typography>
									<Typography variant="caption">Size: {item.size}</Typography>
									<Typography variant="caption">
										Qty: {item.quantity}
									</Typography>
								</Box>
								<CloseIcon
									className="content-end cursor-pointer"
									onClick={() => handleRemove(item._id)}
								/>
							</CardContent>
						</Card>
					))}
				<Divider />
			</List>
			<Box className="flex justify-between p-4">
				<Typography>Subtotal: </Typography>
				<Typography>{total}$</Typography>
			</Box>
			<Button
				variant="contained"
				color="secondary"
				sx={{ margin: 2 }}
				component={Link}
				onClick={handleDraw}
				to="shop-cart/checkout"
			>
				Check out
			</Button>
		</Drawer>
	);
};

export default DrawerCart;
