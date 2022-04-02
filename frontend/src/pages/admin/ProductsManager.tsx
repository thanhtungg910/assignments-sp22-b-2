import React, { useEffect } from "react";
import IProducts from "../../interfaces/products";
import { getProducts, remove } from "../../api/products";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import useDataTable from "../../hooks/useDataTable";
import { Button, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
const ImageField: any = styled.img`
	width: 150px;
`;
const columns: any = [
	{
		id: "title",
		name: "Title",
		sortable: true,
		sortField: "title",
		selector: (row: IProducts) => row.title,
	},
	{
		id: "image",
		name: "Image",
		selector: (row: IProducts) => <ImageField src={row?.image} />,
	},
	{
		id: "price",
		name: "Price",
		sortable: true,
		sortField: "price",
		selector: (row: IProducts) => row.price.toLocaleString(),
	},
	{
		id: "amount",
		name: "Amount",
		sortable: true,
		sortField: "quantity",
		selector: (row: { quantity: Number }) => row?.quantity.toLocaleString(),
	},
	{
		id: "sale",
		name: "Sale",
		sortable: true,
		sortField: "sale",
		selector: (row: IProducts) => `${row.saleoff}%`,
	},
	{
		id: "createat",
		name: "Create at",
		sortable: true,
		sortField: "createat",
		selector: (row: IProducts) => row.createdAt,
	},
	{
		id: "updatedat",
		name: "Updated at",
		sortable: true,
		sortField: "updatedat",
		selector: (row: IProducts) => row.updatedAt,
	},
	{
		id: "edit",
		name: "",
		selector: (row: IProducts) => (
			<ListItemButton component={Link} to={`edit/${row.slug}`}>
				Edit
			</ListItemButton>
		),
	},
];
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
			columns={columns}
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
