import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import useDataTable from "../../hooks/useDataTable";
import { columnsProduct } from "../../components/layouts/Columns";
import { getProducts, remove } from "../../api/products";

const ProductsManager: React.FC = () => {
	const {
		setData,
		resetPaginationToggle,
		handleRowSelected,
		contextActions,
		toggleCleared,
		filteredItems,
		subHeaderComponentMemo,
		handleRowClicked,
	} = useDataTable({
		page: true,
		isButton: true,
		remove: remove,
	});

	useEffect(() => {
		const fetchData = async () => {
			const {
				data: { products },
			} = await getProducts(0, 0);
			setData(products);
		};
		fetchData();
	}, []);

	return (
		<DataTable
			title="Product List"
			columns={columnsProduct}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle}
			subHeader
			selectableRowsHighlight
			onRowClicked={handleRowClicked}
			// Text search start
			subHeaderComponent={subHeaderComponentMemo}
			// Text search end
			// Check box start
			selectableRows
			// Check box end
			/* persistTableHead */
			// Content check start
			contextActions={contextActions}
			// Content check end
			onSelectedRowsChange={handleRowSelected}
			clearSelectedRows={toggleCleared}
		/>
	);
};

export default ProductsManager;
