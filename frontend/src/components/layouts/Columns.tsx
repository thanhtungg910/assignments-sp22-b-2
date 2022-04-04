import styled from "styled-components";
import { Button, Chip, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import IProducts from "../../interfaces/products";
import { TableColumn } from "react-data-table-component";
const ImageField: any = styled.img`
	width: 150px;
`;
const columnsOrder: any = [
	{
		id: "name",
		name: "Name",
		sortable: true,
		sortField: "name",
		selector: (row: { name: String }) => row.name,
	},
	{
		id: "address",
		name: "Address",
		sortable: true,
		sortField: "address",
		selector: (row: { address: String }) => row.address,
	},
	{
		id: "phone",
		name: "Phone",
		sortable: true,
		sortField: "phone",
		selector: (row: { phone: String }) => row.phone,
	},
	{
		id: "payment",
		name: "Payment",
		sortable: true,
		sortField: "payment",
		selector: (row: { payment: boolean }) =>
			row.payment ? (
				<Chip color="success" label="OK" />
			) : (
				<Chip color="warning" label="NO" />
			),
	},
	{
		id: "price",
		name: "Price",
		sortable: true,
		sortField: "price",
		selector: (row: { price: Number; quantity: Number }) => (
			<h1>
				{row.price}
				<sup> X {row.quantity}</sup>
			</h1>
		),
	},
	{
		id: "createat",
		name: "Create at",
		sortable: true,
		sortField: "createat",
		selector: (row: { createdAt: Date }) => format(row.createdAt),
	},
	// {
	// 	id: "updatedat",
	// 	name: "Updated at",
	// 	sortable: true,
	// 	sortField: "updatedat",
	// 	selector: (row: { updatedAt: String }) => row.updatedAt,
	// },
];
const columnsProduct: TableColumn<object>[] | any = [
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
		selector: (row: { createdAt: Date }) => format(row.createdAt),
	},
	{
		id: "updatedat",
		name: "Updated at",
		sortable: true,
		sortField: "updatedat",
		selector: (row: { updatedAt: Date }) => format(row.updatedAt),
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
const columnsCategory: TableColumn<object>[] | any = [
	{
		id: "title",
		name: "Title",
		selector: (row: { title: String }) => row.title,
		sortable: true,
		sortField: "title",
	},
	{
		id: "createat",
		name: "Create at",
		sortable: true,
		sortField: "createat",
		selector: (row: { createdAt: Date }) => format(row.createdAt),
	},
	{
		id: "updatedat",
		name: "Updated at",
		sortable: true,
		sortField: "updatedat",
		selector: (row: { updatedAt: Date }) => format(row.updatedAt),
	},
];
const columnsCustomer: any = [
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
		selector: (row: { createdAt: Date }) => format(row.createdAt),
	},
	{
		id: "updatedat",
		name: "Updated at",
		sortable: true,
		sortField: "updatedat",
		selector: (row: { updatedAt: Date }) => format(row.updatedAt),
	},
];
export { columnsOrder, columnsProduct, columnsCustomer, columnsCategory };
