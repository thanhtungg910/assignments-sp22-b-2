import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
	overViewOrder,
	overViewOrderClient,
	updateOrder,
} from "../../api/carts";
import { getProductOrder } from "../../api/products";
import Notify from "../../components/common/Notify";
import { ColumnsOrderClient } from "../../components/layouts/Columns";
import { getLocal } from "../../utils/localstorage";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hook";
type user = { _id: String | null; accessToken: String | null };

const MyCart = () => {
	const [data, setData] = useState<any[]>([]);
	const [edit, setEdit] = useState<boolean>(false);
	const { _id, accessToken }: user = useAppSelector((state) => state.users);
	const newColumns = [
		...ColumnsOrderClient,
		{
			id: "status",
			name: "Status",
			selector: (row: {
				status: Number;
				_id: String;
				product: { slug: String };
			}) => handleStatus(row.status, row._id, row.product.slug),
		},
	];
	const handleStatus = (step: Number, id: String, slug: String) => {
		switch (step) {
			case 0:
				return (
					<>
						<Chip color="warning" label="Pending" variant="outlined" />
						<Chip
							clickable
							label="Cancel"
							color="warning"
							onClick={() => handleCancel(id)}
						/>
					</>
				);
			case 1:
				return (
					<>
						<Chip color="warning" label="Pending" variant="outlined" />
						<Chip
							color="error"
							label="Cancel"
							onClick={() => handleCancel(id)}
						/>
					</>
				);
			case 2:
				return (
					<>
						<Chip color="warning" label="Shipping" variant="outlined" />;
					</>
				);
			case 3:
				return (
					<>
						<Chip color="success" label="Done" variant="outlined" />;
						<Link
							to={`/products/${slug}`}
							className="ml-3 underline text-blue-600"
						>
							Feedback
						</Link>
					</>
				);
			default:
				return <Chip color="error" label="Cancel" variant="outlined" />;
		}
	};

	const handleCancel = async (id: String) => {
		await updateOrder(id, _id, accessToken, {
			status: 5,
		});
		setEdit(!edit);
	};
	useEffect(() => {
		const getOrder = async () => {
			try {
				const { data: order } = await overViewOrderClient(_id, accessToken);
				const newOrder = order.map(async (item: { buy: String }) => {
					const { data: product } = await getProductOrder(item.buy);
					return { ...item, product: product };
				});
				const orderList: any[] = await Promise.all(newOrder);
				setData(orderList);
			} catch (error) {
				Notify(error);
			}
		};
		getOrder();
	}, [edit]);

	return (
		<div className="mt-5 min-h-screen p-2 px-24">
			<DataTable columns={newColumns} data={data} pagination />
		</div>
	);
};

export default MyCart;
