import React, { useCallback, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Swal from "sweetalert2";
import differenceBy from "lodash/differenceBy";
import { useDispatch } from "react-redux";
import "sweetalert2/dist/sweetalert2.min.css";
import { AxiosResponse } from "axios";
import { logout } from "../actions/users";
import FilterComponent from "../features/admin/FilterComponent";
// import { remove } from "../api/products";
import Flexs from "../components/layouts/Flexs";

const useDataTable = ({
	page,
	remove,
}: {
	page: Boolean;
	remove: (slug: String | undefined) => Promise<AxiosResponse<any, any>>;
}) => {
	const [data, setData] = useState<any[]>([]);
	const [filterText, setFilterText] = useState<string>("");
	const [resetPaginationToggle, setResetPaginationToggle] =
		useState<boolean>(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
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
					if (page) {
						setToggleCleared(!toggleCleared);
					}
					setData(differenceBy(data, selectedRows, "title"));
					selectedRows.forEach(async (r: any) => {
						try {
							await remove(r.slug);
						} catch (error: any) {
							await Swal.fire("Oop...!", error.response.data.message, "error");
							dispatch(logout(null));
							return navigate("/");
						}
					});
					return Swal.fire(
						"Deleted!",
						"Your file has been deleted.",
						"success"
					);
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
		(item) =>
			item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
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
					onFilter={(e: React.ChangeEvent<HTMLInputElement>) =>
						setFilterText(e.target.value)
					}
					onClear={handleClear}
					filterText={filterText}
				/>
				{page ? (
					<Button
						component={Link}
						to="add"
						size="medium"
						variant="contained"
						color="primary"
					>
						<AddCircleIcon titleAccess="Add"></AddCircleIcon>
					</Button>
				) : (
					<Button
						size="medium"
						variant="contained"
						color="primary"
						onClick={() => setToggleCleared(!toggleCleared)}
					>
						<AddCircleIcon titleAccess="Add"></AddCircleIcon>
					</Button>
				)}
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
		setToggleCleared,
	};
};
export default useDataTable;
