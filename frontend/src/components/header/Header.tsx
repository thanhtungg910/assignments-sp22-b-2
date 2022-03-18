import React, { useState } from "react";
import Navigation from "../navigation/Navigation";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PromoBanner from "../common/PromoBanner";
import logo from "../../logo.svg";
import DialogForm from "../../features/Dialog";
import SignUp from "../../features/SignUp";

const Header: React.FC = () => {
	const [openAccount, setOpenAccount] = useState<boolean>(false);
	return (
		<>
			<PromoBanner />
			<DialogForm open={openAccount} onClose={setOpenAccount}>
				<SignUp />
			</DialogForm>
			<header className="w-full bg-white flex justify-between items-center px-10 py-3">
				<picture className="w-20 ml-4">
					<img src={logo} className="object-cover w-full" />
				</picture>
				<Navigation></Navigation>
				<div className="flex gap-5">
					<AccountCircleOutlinedIcon
						onClick={() => setOpenAccount(true)}
						className="cursor-pointer"
					/>
					<FavoriteBorderRoundedIcon className="cursor-pointer" />
					<ShoppingCartOutlinedIcon className="cursor-pointer" />
					<SearchOutlinedIcon className="cursor-pointer" />
				</div>
			</header>
		</>
	);
};

export default Header;
