import React, { useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { getCategories } from "../../api/categories";
import useDataTable from "../../hooks/useDataTable";
import ICategories from "../../interfaces/categories";

const columns: TableColumn<ICategories>[] | any = [
	{
		id: "title",
		name: "Title",
		selector: (row: ICategories) => row.title,
	},
];
const CategoriesManager: React.FC = () => {
	const {
		setData,
		resetPaginationToggle,
		handleRowSelected,
		contextActions,
		toggleCleared,
		filteredItems,
		subHeaderComponentMemo,
	} = useDataTable();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getCategories();
			console.log(data);

			setData(data);
		};
		fetchData();
	}, []);

	return (
		<DataTable
			title="Categories List"
			columns={columns}
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
	);
};

export default CategoriesManager;
