import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Card, CardContent, Typography } from "@mui/material";

interface IDrawerCart {
	open: boolean;
	toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerCart: React.FC<IDrawerCart> = ({ open, toggleDrawer }: IDrawerCart) => {
	const handleDraw = () => {
		toggleDrawer(false);
	};

	return (
		<Drawer anchor={"right"} open={open} onClose={toggleDrawer}>
			<List onClick={handleDraw} sx={{ minWidth: 400 }} className="overflow-hidden overflow-y-auto">
				<Typography sx={{ textAlign: "Center" }}>Item in cart</Typography>
				<Card>
					<CardContent className="flex gap-1">
						<Box>
							<img
								srcSet="https://picsum.photos/300/400?w=164&h=auto&fit=crop&auto=format&dpr=2 2x"
								className="object-cover"
							/>
						</Box>
						<Box className="flex flex-col">
							<strong className="font-bold text-lg underline">Tiude</strong>
							<Typography variant="caption">Color: Xanh</Typography>
							<Typography variant="caption">Size: Xl</Typography>
							<Typography variant="caption">Qty: 1</Typography>
						</Box>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="flex gap-1">
						<Box>
							<img
								srcSet="https://picsum.photos/300/400?w=164&h=auto&fit=crop&auto=format&dpr=2 2x"
								className="object-cover"
							/>
						</Box>
						<Box className="flex flex-col">
							<strong className="font-bold text-lg underline">Tiude</strong>
							<Typography variant="caption">Color: Xanh</Typography>
							<Typography variant="caption">Size: Xl</Typography>
							<Typography variant="caption">Qty: 1</Typography>
						</Box>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="flex gap-1">
						<Box>
							<img
								srcSet="https://picsum.photos/300/400?w=164&h=auto&fit=crop&auto=format&dpr=2 2x"
								className="object-cover"
							/>
						</Box>
						<Box className="flex flex-col">
							<strong className="font-bold text-lg underline">Tiude</strong>
							<Typography variant="caption">Color: Xanh</Typography>
							<Typography variant="caption">Size: Xl</Typography>
							<Typography variant="caption">Qty: 1</Typography>
						</Box>
					</CardContent>
				</Card>
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
