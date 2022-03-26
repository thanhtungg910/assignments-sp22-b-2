import React, { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PromoBanner from "../common/PromoBanner";
import logo from "../../logo.svg";
import DialogForm from "../../features/Dialog";
import { useSelector } from "react-redux";
import { getLocal } from "../../utils/localstorage";

const Header: React.FC = () => {
	const [openAccount, setOpenAccount] = useState<boolean>(false);
	const [exist, saveExist] = useState(() => getLocal("user") ?? false);
	const { saveLocal } = useSelector(
		(state: { users: { username: String | null; saveLocal: boolean } }) => state.users
	);

	useEffect(() => {
		console.log({ isuser: saveLocal, exist: exist });
		saveExist(exist || saveLocal);
		return () => saveExist(false);
	}, [saveLocal, exist]);

	return (
		<>
			<PromoBanner />
			<DialogForm open={openAccount} onClose={setOpenAccount}>
				{/* <SignIn /> */}
			</DialogForm>
			<header className="w-full bg-white flex justify-between items-center px-10 py-3">
				<picture className="w-20 ml-4">
					<img src={logo} className="object-cover w-full" />
				</picture>
				<Navigation></Navigation>
				<div className="flex gap-5">
					{exist && <h1>Hi! TUng</h1>}
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
