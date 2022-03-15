import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Navigation from "../navigation/Navigation";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from "../../logo.svg";

const Header: React.FC = () => {
	const [show, setShow] = useState<boolean>(false);
	const handleShow: () => void = () => {
		setShow(!show);
	};

	return (
		<>
			<Navigation show={show} onClick={handleShow}></Navigation>
			<header className="w-full bg-white px-9 flex justify-between items-center">
				<AddIcon onClick={handleShow} className="cursor-pointer" />
				<picture className="w-20">
					<img src={logo} className="object-cover w-full" />
				</picture>
				<div className="flex gap-5">
					<AccountCircleOutlinedIcon className="cursor-pointer" />
					<FavoriteBorderRoundedIcon className="cursor-pointer" />
					<ShoppingCartOutlinedIcon className="cursor-pointer" />
					<SearchOutlinedIcon className="cursor-pointer" />
				</div>
			</header>
		</>
	);
};

export default Header;
