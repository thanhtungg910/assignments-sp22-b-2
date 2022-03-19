import { Button } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import FilterComponent from "../features/admin/FilterComponent";

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
		console.log(state);

		setSelectedRows(state.selectedRows);
	}, []);

	const contextActions = useMemo(() => {
		const handleDelete = () => {
			// if (
			// 	window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r) => r?.title)}?`)
			// ) {
			setToggleCleared(!toggleCleared);
			// 	// setData(differenceBy(data, selectedRows, "title"));
			// }
		};

		return (
			<Button key="delete" onClick={handleDelete} color="error" variant="contained">
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
			<FilterComponent
				onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
				onClear={handleClear}
				filterText={filterText}
			/>
		);
	}, [filterText, resetPaginationToggle]);

	return {
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
