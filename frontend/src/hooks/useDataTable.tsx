import React, { useCallback, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FilterComponent from "../features/admin/FilterComponent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Flexs from "../components/layouts/Flexs";
import differenceBy from "lodash/differenceBy";
import { remove } from "../api/products";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const useDataTable = () => {
	const [data, setData] = useState<any[]>([]);
	const [filterText, setFilterText] = useState<string>("");
	const [resetPaginationToggle, setResetPaginationToggle] = useState<boolean>(false);
	const navigate = useNavigate();
	/**
	 * edit & remove
	 */
	const [selectedRows, setSelectedRows] = useState([]);
	const [toggleCleared, setToggleCleared] = useState<boolean>(false);
	const handleRowSelected = useCallback((state) => {
		setSelectedRows(state.selectedRows);
	}, []);

	const contextActions = useMemo(() => {
		const handleDelete = async () => {
			try {
				const result = await Swal.fire({
					title: "Are you sure?",
					text: "You won't be able to revert this!",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "Yes, delete it!",
				});
				if (result.isConfirmed) {
					setToggleCleared(!toggleCleared);
					setData(differenceBy(data, selectedRows, "title"));
					selectedRows.forEach(async (r: any) => {
						try {
							await remove(r.slug);
						} catch (error: any) {
							await Swal.fire("Oop...!", error.response.data.message, "error");
							return navigate("/");
						}
					});
					return Swal.fire("Deleted!", "Your file has been deleted.", "success");
				}
			} catch (error: any) {
				return Swal.fire("Deleted!", error.response.data.message, "error");
			}
		};

		return (
			<Button key="delete" title="Clear" onClick={handleDelete} color="error">
				Delete
			</Button>
		);
	}, [data, selectedRows, toggleCleared]);

	/**
	 * edit & remove
	 */

	const filteredItems = data.filter(
		(item) => item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
	);
	/**
	 * Search by title
	 */
	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText("");
			}
		};
		return (
			<Flexs className="items-center">
				<FilterComponent
					onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
					onClear={handleClear}
					filterText={filterText}
				/>
				<Button component={Link} to="add" size="medium" variant="contained" color="primary">
					<AddCircleIcon titleAccess="Add"></AddCircleIcon>
				</Button>
			</Flexs>
		);
	}, [filterText, resetPaginationToggle]);

	const handleRowClicked = (row: object, event: object) => {
		console.log(event);
	};
	return {
		handleRowClicked,
		setData,
		resetPaginationToggle,
		handleRowSelected,
		contextActions,
		toggleCleared,
		filteredItems,
		subHeaderComponentMemo,
	};
};
export default useDataTable;
