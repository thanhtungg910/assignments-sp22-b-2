import React, { useEffect, useMemo, useState } from "react";
import products from "../../interfaces/products";
import { getProducts } from "../../api/products";
import DataTable from "react-data-table-component";
import styled from "styled-components";
const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;
	&:hover {
		cursor: pointer;
	}
`;
const ImageField: any = styled.img`
	width: 200px;
`;
type IFilterComponent = {
	filterText: string | number | readonly string[] | undefined;
	onFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClear: () => void;
};
const FilterComponent = ({ filterText, onFilter, onClear }: IFilterComponent) => (
	<>
		<TextField
			id="search"
			type="text"
			placeholder="Filter By Name"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<button type="button" onClick={onClear}>
			X
		</button>
	</>
);
const columns: any = [
	{
		id: "title",
		name: "Title",
		sortable: true,
		sortField: "title",
		selector: (row: products) => row.title,
	},
	{
		id: "image",
		name: "image",
		selector: (row: products) => <ImageField src={row?.image} />,
	},
	{
		id: "price",
		name: "price",
		sortable: true,
		sortField: "price",
		selector: (row: products) => row.price,
	},
];
const ProductsManager: React.FC = () => {
	const [data, setData] = useState<products[]>([]);
	const [filterText, setFilterText] = useState<string>("");
	const [resetPaginationToggle, setResetPaginationToggle] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getProducts();
			setData(data);
		};
		fetchData();
	}, []);

	const filteredItems = data.filter(
		(item) => item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
	);

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

	return (
		<DataTable
			title="Product List"
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle}
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			selectableRows
			persistTableHead
		/>
	);
};

export default ProductsManager;
