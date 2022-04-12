import { Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { overViewOrder, updateOrder } from "../../api/carts";
import { getProductOrder } from "../../api/products";
import Notify from "../../components/common/Notify";
import { ColumnsOrderClient } from "../../components/layouts/Columns";
import { getLocal } from "../../utils/localstorage";
import { Link } from "react-router-dom";

type Props = {};
function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number
) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const MyCart = (props: Props) => {
	const [data, setData] = useState<any[]>([]);
	const [edit, setEdit] = useState<boolean>(false);
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
					</>
				);
			case 2:
				return (
					<>
						<Chip color="warning" label="Shipping" variant="outlined" />
					</>
				);
			case 3:
				return (
					<>
						<Chip color="success" label="Done" variant="outlined" />
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
		await updateOrder(id, {
			status: 5,
		});
		setEdit(!edit);
	};
	useEffect(() => {
		const getOrder = async () => {
			try {
				const { _id } = getLocal("user");
				const { data: order } = await overViewOrder(_id);
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
