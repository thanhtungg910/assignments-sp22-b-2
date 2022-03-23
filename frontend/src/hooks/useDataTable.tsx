import React, { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import FilterComponent from "../features/admin/FilterComponent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Flexs from "../components/layouts/Flexs";
import { getProducts, remove } from "../api/products";

const useDataTable = () => {
	const [data, setData] = useState<any[]>([]);
	const [filterText, setFilterText] = useState<string>("");
	const [resetPaginationToggle, setResetPaginationToggle] = useState<boolean>(false);
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
			if (
				window.confirm(
					`Are you sure you want to delete:\r ${selectedRows.map(
						(r: { title: String }) => r?.title
					)}?`
				)
			) {
				selectedRows.forEach((r: any) => {
					console.log(r.slug);
					try {
						remove(r.slug);
					} catch (error) {
						console.log(error);
					}
				});
				const { data: products } = await getProducts();

				setToggleCleared(!toggleCleared);
				// setData(differenceBy(data, selectedRows, "title"));
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
