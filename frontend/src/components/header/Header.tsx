import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PromoBanner from "../common/PromoBanner";
import Navigation from "../navigation/Navigation";
import logo from "../../logo.svg";
import DialogForm from "../../features/DialogForm";
import { getLocal, removeLocal } from "../../utils/localstorage";
import { logout } from "../../actions/users";
import { signOut } from "firebase/auth";
import auth from "../../firebase/config";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	const [messageErr, setMessageErr] = React.useState<any>({
		message: null,
		type: null,
	});
	const { username } = useSelector((state: { users: { username: String | null } }) => state.users);
	const dispatch = useDispatch();
	const [openAccount, setOpenAccount] = useState<boolean>(false);
	const [exist, saveExist] = useState(() => getLocal("user") ?? false);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	useEffect(() => {
		saveExist(exist || username);
		return () => saveExist(false);
	}, [username, exist]);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = () => {
		signOut(auth);
		saveExist(false);
		dispatch(logout(null));
		setMessageErr({
			message: null,
			type: null,
		});
		setAnchorEl(null);
	};

	return (
		<>
			<PromoBanner />
			<DialogForm
				open={openAccount}
				onClose={setOpenAccount}
				messageErr={messageErr}
				setMessageErr={setMessageErr}
			>
				{/* <SignIn /> */}
			</DialogForm>
			<header className="w-full bg-white flex justify-between items-center px-10 py-3">
				<picture className="w-20 ml-4">
					<img src={logo} className="object-cover w-full" />
				</picture>
				<Navigation></Navigation>
				<div className="flex gap-5">
					{exist ? (
						<>
							<h1>Hi! {username || exist.username}</h1>
							<IconButton
								color="inherit"
								aria-controls={exist ? "basic-menu" : undefined}
								aria-haspopup="true"
								aria-expanded={exist ? "true" : undefined}
								onClick={handleClick}
								sx={{
									padding: 0,
								}}
							>
								<AccountCircleOutlinedIcon />
							</IconButton>
							<Menu
								id="basic-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									"aria-labelledby": "basic-button",
								}}
							>
								{exist.role == 1 && (
									<Link to="/admin">
										<MenuItem>Dashboard</MenuItem>
									</Link>
								)}
								<MenuItem /* onClick={handleClose} */>Profile</MenuItem>
								<MenuItem /* onClick={handleClose} */>My account</MenuItem>
								<MenuItem onClick={handleLogout}>Logout</MenuItem>
							</Menu>
						</>
					) : (
						<AccountCircleOutlinedIcon
							onClick={() => setOpenAccount(true)}
							className="cursor-pointer"
						/>
					)}

					<FavoriteBorderRoundedIcon className="cursor-pointer" />
					<ShoppingCartOutlinedIcon className="cursor-pointer" />
					<SearchOutlinedIcon className="cursor-pointer" />
				</div>
			</header>
		</>
	);
};

export default Header;
