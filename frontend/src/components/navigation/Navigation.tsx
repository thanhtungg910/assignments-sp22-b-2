import { Link } from "react-router-dom";

type menu = {
	id: Number;
	title: String;
	path: String;
	isDisplay: boolean;
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
const Navigation = () => {
	return (
		<ul className="flex justify-between gap-x-10 items-center">
			{menuData?.map((item: menu) => {
				if (!item.isDisplay) return null;
				return (
					<li key={item?.id.toString()}>
						<Link to={item?.path.toString()}>{item.title}</Link>
					</li>
				);
			})}
		</ul>
	);
};
export default Navigation;
