import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Card, CardContent, Typography } from "@mui/material";
import { DefaultRootState, useSelector } from "react-redux";
import { ICart } from "../../interfaces/products";

interface IDrawerCart {
	open: boolean;
	toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerCart: React.FC<IDrawerCart> = ({ open, toggleDrawer }: IDrawerCart) => {
	const cartList: ICart[] = useSelector((state: { carts: { value: [] } }) => state.carts.value);
	const handleDraw = () => {
		toggleDrawer(false);
	};

	return (
		<Drawer anchor={"right"} open={open} onClose={toggleDrawer}>
			<List onClick={handleDraw} sx={{ minWidth: 400 }} className="overflow-hidden overflow-y-auto">
				<h1 className="font-bold text-lg text-center">Item in cart ({cartList.length})</h1>
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
								<Box className="flex flex-col">
									<strong className="font-bold text-lg underline inline-block">{item.title}</strong>
									<Typography variant="caption">Price: {item.price}</Typography>
									<Typography variant="caption">Color: {item.color}</Typography>
									<Typography variant="caption">Size: {item.size}</Typography>
									<Typography variant="caption">Qty: {item.quantity}</Typography>
								</Box>
							</CardContent>
						</Card>
					))}
				<Divider />
			</List>
			<Box className="flex justify-between p-4">
				<Typography>Subtotal: </Typography>
				<Typography>12$</Typography>
			</Box>
			<Button variant="contained" color="secondary" sx={{ margin: 2 }}>
				Check out
			</Button>
		</Drawer>
	);
};

export default DrawerCart;
