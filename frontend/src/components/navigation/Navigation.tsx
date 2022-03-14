import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
const MenuList = styled.ul`
	overflow-y: auto;
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 60%;
	padding: 0.5em 0;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	font-size: 2em;
	font-weight: 500;
	background-color: #fff;
	transform: translateX(-50em);
	${(show: { isActive: boolean }) =>
		show.isActive &&
		css`
			transform: translateX(0);
		`};
	transition: all 0.5s linear;
	li {
		width: 100%;
		padding: 1em;
		margin: 1em 0;
		position: relative;
		transition: all 0.2s;
		&:hover {
			width: 100%;
			background-color: black;
			color: white;
		}
		a {
			margin-left: 1em;
		}
	}
`;
type menu = {
	id: Number;
	title: String;
	path: String;
	isDisplay: boolean;
};
type props = {
	show: boolean;
	onClick: () => void;
};
const menuData: menu[] = [
	{
		id: 1,
		title: "Trang chủ",
		path: "/",
		isDisplay: true,
	},
	{
		id: 2,
		title: "Giới thiệu",
		path: "/intro",
		isDisplay: true,
	},
	{
		id: 3,
		title: "Sản phẩm",
		path: "/products",
		isDisplay: true,
	},
	{
		id: 4,
		title: "Liên hệ",
		path: "/contact",
		isDisplay: true,
	},
];
const Navigation = ({ show, onClick }: props) => {
	return (
		<MenuList isActive={show}>
			<CloseIcon onClick={onClick} className="cursor-pointer ml-9 bg-slate-500 rounded-full" />
			{menuData?.map((item: menu) => {
				if (!item.isDisplay) return null;
				return (
					<li key={item?.id.toString()}>
						<Link to={item?.path.toString()}>{item.title}</Link>
					</li>
				);
			})}
			<h1>asd</h1>
		</MenuList>
	);
};
export default Navigation;
