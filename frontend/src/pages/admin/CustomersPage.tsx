import { Avatar, Chip } from "@mui/material";
import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import FaceIcon from "@mui/icons-material/Face";
import { userList } from "../../api/users";
import useDataTable from "../../hooks/useDataTable";
import { LockOutlined } from "@mui/icons-material";
type Props = {};

const CustomersPage: React.FC = (props: Props) => {
	const {
		setData,
		resetPaginationToggle,
		filteredItems,
		subHeaderComponentMemo,
	} = useDataTable({
		page: false,
		isButton: false,
	});
	const columns: any = [
		{
			id: "username",
			name: "User name",
			sortable: true,
			sortField: "title",
			selector: (row: { username: String }) => row.username,
		},
		{
			id: "email",
			name: "Email",
			sortable: true,
			sortField: "email",
			selector: (row: { email: String }) => row.email,
		},
		{
			id: "createat",
			name: "Create at",
			sortable: true,
			sortField: "createat",
			selector: (row: { createdAt: String }) => row.createdAt,
		},
		{
			id: "updatedat",
			name: "Updated at",
			sortable: true,
			sortField: "updatedat",
			selector: (row: { updatedAt: String }) => row.updatedAt,
		},
		{
			id: "status",
			name: "Status",
			sortable: true,
			sortField: "status",
			selector: (row: { isActive: boolean }) =>
				row.isActive ? (
					<Chip icon={<FaceIcon />} label="Active" color="success" />
				) : (
					<Chip icon={<LockOutlined />} label="Lock" color="error" />
				),
		},
	];
	useEffect(() => {
		const getUsers = async () => {
			try {
				const { data } = await userList();
				setData(data);
			} catch (error: any) {
				await Swal.fire({
					title: "Oop..!",
					text: error.response.data.message,
					icon: "error",
					confirmButtonText: `<a href="/">Exit</a>`,
				});
			}
		};
		getUsers();
	}, []);
	return (
		<DataTable
			title="Customers"
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle}
			subHeader
			selectableRowsHighlight
			subHeaderComponent={subHeaderComponentMemo}
		/>
	);
};

export default CustomersPage;
