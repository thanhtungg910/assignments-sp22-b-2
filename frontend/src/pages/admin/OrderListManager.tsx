import { Chip, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { orderList, updateOrder } from "../../api/carts";
import { columnsOrder } from "../../components/layouts/Columns";
import useDataTable from "../../hooks/useDataTable";
import { Link } from "react-router-dom";

type Props = {};

const OrderListManager = (props: Props) => {
	const [edit, setEdit] = useState<boolean>(false);
	const {
		setData,
		resetPaginationToggle,
		filteredItems,
		subHeaderComponentMemo,
	} = useDataTable({
		page: false,
		isButton: false,
	});
	const newColumns = [
		...columnsOrder,
		{
			id: "status",
			name: "Status",
			selector: (row: { status: Number; _id: String }) =>
				handleStatus(row.status, row._id),
		},
		{
			id: "over-view",
			name: "",
			cell: (row: { userId: String; _id: String }) => (
				<IconButton
					sx={{ display: "flex", justifyContent: "flex-end" }}
					component={Link}
					to={`${row._id}/${row.userId}`}
				>
					<RemoveRedEyeIcon color="primary" />
				</IconButton>
			),
		},
	];
	const handleStatus = (step: Number, id: String) => {
		switch (step) {
			case 0:
				return (
					<>
						<Chip
							clickable
							label="Access"
							color="success"
							onClick={() => handleSuccess(id)}
						/>
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
						<Chip color="success" label="OK" onClick={() => handleOk(id)} />
					</>
				);
			case 2:
				return <Chip color="warning" label="Shipping" variant="outlined" />;
			case 3:
				return <Chip color="success" label="Done" variant="outlined" />;
			default:
				return <Chip color="error" label="Cancel" variant="outlined" />;
		}
	};
	const handleOk = async (id: String) => {
		await updateOrder(id, {
			status: 3,
		});
		setEdit(!edit);
	};
	const handleSuccess = async (id: String) => {
		await updateOrder(id, {
			status: 1,
		});
		setEdit(!edit);
	};
	const handleCancel = async (id: String) => {
		await updateOrder(id, {
			status: 5,
		});
		setEdit(!edit);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await orderList();
				setData(data);
			} catch (error: any) {
				Swal.fire({
					title: "Oop..!",
					text: error.response.data.message,
					icon: "error",
					confirmButtonText: `<a href="/">Exit</a>`,
				});
			}
		};
		fetchData();
	}, [edit]);

	return (
		<DataTable
			title="Order List"
			columns={newColumns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle}
			subHeader
			selectableRowsHighlight
			subHeaderComponent={subHeaderComponentMemo}
		/>
	);
};

export default OrderListManager;
