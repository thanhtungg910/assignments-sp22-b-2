import { Box, Chip, Grid } from "@mui/material";
import { Paper, Typography } from "@mui/material";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { overViewOrder } from "../../api/carts";
import { getProductOrder } from "../../api/products";
import OrderTable from "../../components/admin/cart/OrderTable";
import Notify from "../../components/common/Notify";

const OverViewOrderPage = () => {
	const { id, author } = useParams(); // { doc; user }
	const [data, setData] = useState<any[]>([]);
	const [infor, setInfor] = useState({
		name: "",
		address: "",
		phone: 0,
		email: "",
	});
	useEffect(() => {
		const fetchOrder = async () => {
			try {
				const { data } = await overViewOrder(author);
				setInfor({
					name: data[0].name,
					address: data[0].address,
					phone: data[0].phone,
					email: "abcdacd@gmail.com",
				});
				const newOrder = data.map(async (item: { buy: String }) => {
					const { data: product } = await getProductOrder(item.buy);
					return { ...item, product: product };
				});
				const orderList: any[] = await Promise.all(newOrder);
				setData(orderList);
			} catch (error) {
				Notify(error);
			}
		};
		fetchOrder();
	}, [author]);

	return (
		<Grid
			container
			spacing={3}
			sx={{
				p: 2,
				minHeight: 500,
			}}
		>
			<Grid item xs={12} md={8} lg={9}>
				<Paper
					sx={{
						p: 2,
						minHeight: 500,
					}}
				>
					<Typography variant="h5" sx={{ fontWeight: "bold" }}>
						Order <Chip label={`#${author}`} />
					</Typography>
					<Grid
						sx={{
							p: 2,
							minHeight: 240,
						}}
						container
					>
						<Grid
							item
							xs={3}
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: 2,
							}}
						>
							<Box>
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Billing details
								</Typography>
								<Typography
									variant="body2"
									color="primary"
									className="underline"
								>
									Customer: {infor.name}
									<br />
									Address: {infor.address}
								</Typography>
							</Box>
							<Box>
								<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
									Email
								</Typography>
								<Typography
									variant="body2"
									color="primary"
									className="underline"
								>
									{infor.email}
								</Typography>
							</Box>
							<Box>
								<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
									Phone
								</Typography>
								<Typography
									variant="body2"
									color="primary"
									className="underline"
								>
									{infor.phone}
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={9}>
							<OrderTable data={data} />
							<Typography variant="h6" className="mt-4">
								Subtotal:{" "}
								{data
									.reduce(
										(current, { quantity, price }) =>
											current + price * quantity,
										0
									)
									.toLocaleString()}
							</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12} md={4} lg={3}>
				<Paper className="p-2 min-h-full">
					<Typography variant="h6" sx={{ fontWeight: "bold" }}>
						Shipping address
					</Typography>
					<Typography variant="body2">{infor.address}</Typography>
					<Typography
						variant="subtitle1"
						sx={{ fontWeight: "bold", marginBlock: 2 }}
					>
						Payment{" "}
						<Chip label="Credit Card" color="success" variant="outlined" />
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{ fontWeight: "bold", marginBlock: 2 }}
					>
						Shipping <Chip label="Free" color="success" variant="outlined" />
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default OverViewOrderPage;
