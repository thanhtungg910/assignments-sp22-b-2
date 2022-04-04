import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	ListItemButton,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
	createCategory,
	getCategories,
	getCategory,
	removeCategory,
	updateCategory,
} from "../../api/categories";
import { columnsCategory } from "../../components/layouts/Columns";
import useDataTable from "../../hooks/useDataTable";
import ICategories from "../../interfaces/categories";

const CategoriesManager: React.FC = () => {
	const {
		setData,
		resetPaginationToggle,
		handleRowSelected,
		contextActions,
		toggleCleared,
		filteredItems,
		subHeaderComponentMemo,
		setToggleCleared,
	} = useDataTable({
		page: false,
		isButton: true,
		remove: removeCategory,
	});
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({ mode: "onBlur" });
	const [edit, setEdit] = useState<null | String | undefined>(null);
	const newColumnsCategory = [
		...columnsCategory,
		{
			id: "edit",
			name: "",
			selector: (row: ICategories) => (
				<ListItemButton onClick={() => handleEdit(row.slug)}>
					Edit
				</ListItemButton>
			),
		},
	];
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getCategories();
			setData(data);
		};
		fetchData();
	}, [edit]);
	const handleEdit = async (slug: String | undefined) => {
		const {
			data: { category },
		} = await getCategory(slug);
		reset(category);
		setToggleCleared(!toggleCleared);
		setEdit(slug);
	};

	const onSubmit = handleSubmit(async (data) => {
		try {
			if (edit) {
				const res = await updateCategory(edit, data);
				reset();
				setToggleCleared(!toggleCleared);
				Swal.fire({
					title: "Success!",
					icon: "success",
				});
				return setEdit(null);
			}
			const { data: dataAdd } = await createCategory(data);
			reset();
			const newData = [...filteredItems, dataAdd];
			setData(newData);
			setToggleCleared(!toggleCleared);
			Swal.fire({
				title: "Success!",
				icon: "success",
			});
		} catch (error: any) {
			Swal.fire({
				title: "Oop..!",
				text: error.response.data.message,
				icon: "error",
				confirmButtonText: `<a href="/">Exit</a>`,
			});
		}
	});

	return (
		<>
			<Dialog
				open={toggleCleared}
				onClose={() => setToggleCleared(!toggleCleared)}
			>
				<form onSubmit={onSubmit}>
					<DialogTitle>Add Category</DialogTitle>
					<DialogContent
						sx={{
							minWidth: 500,
						}}
					>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Category"
							type="text"
							fullWidth
							variant="standard"
							{...register("title", { required: true, minLength: 3 })}
						/>
						{errors.title && (
							<Typography color="error">This is required!</Typography>
						)}
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setToggleCleared(!toggleCleared)}>
							Cancel
						</Button>
						<Button type="submit">{edit ? "Update" : "Add"}</Button>
					</DialogActions>
				</form>
			</Dialog>
			<DataTable
				title="Categories List"
				columns={newColumnsCategory}
				data={filteredItems}
				pagination
				paginationResetDefaultPage={resetPaginationToggle}
				subHeader
				subHeaderComponent={subHeaderComponentMemo}
				selectableRows
				persistTableHead
				contextActions={contextActions}
				onSelectedRowsChange={handleRowSelected}
				clearSelectedRows={toggleCleared}
			/>
		</>
	);
};

export default CategoriesManager;
