import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PromoBanner from "../common/PromoBanner";
import Navigation from "../navigation/Navigation";
import logo from "../../logo.svg";
import DialogForm from "../../features/DialogForm";
import { getLocal } from "../../utils/localstorage";
import { logout } from "../../actions/users";
import { signOut } from "firebase/auth";
import auth from "../../firebase/config";
import DrawerCart from "../common/DrawerCart";
import { createWishList } from "../../api/users";

const Header: React.FC = () => {
	const [messageErr, setMessageErr] = React.useState<any>({
		message: null,
		type: null,
	});
	const { username } = useSelector((state: { users: { username: String | null } }) => state.users);
	const { current } = useSelector((state: { carts: { current: boolean } }) => state.carts);
	const wishListSele: String[] = useSelector((state: { wishList: String[] }) => state.wishList);
	const dispatch = useDispatch();
	const [openAccount, setOpenAccount] = useState<boolean>(false);
	const [exist, saveExist] = useState(() => getLocal("user") ?? false);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	useEffect(() => {
		if (exist) {
			if (wishListSele.length > 0 && wishListSele) {
				createWishList({
					wishlist: wishListSele,
				});
			}
		}
		saveExist(exist || username);
		return () => saveExist(false);
	}, [username, exist, wishListSele]);
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
	const toggleDrawer = () => {
		dispatch({ type: "CHANGE_CURRENT", payload: false });
	};

	return (
		<>
			{current && <DrawerCart open={current} toggleDrawer={toggleDrawer} />}
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
				<div className="flex gap-5 justify-center items-center">
					{exist ? (
						<>
							<Typography>Hi! {username || exist.username}</Typography>
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
							<IconButton
								className="cursor-pointer"
								color="inherit"
								component={Link}
								to="/wish-list"
							>
								<FavoriteBorderRoundedIcon />
							</IconButton>
						</>
					) : (
						<>
							<IconButton
								className="cursor-pointer"
								color="inherit"
								onClick={() => setOpenAccount(true)}
							>
								<AccountCircleOutlinedIcon />
							</IconButton>
							<IconButton
								className="cursor-pointer"
								color="inherit"
								onClick={() => setOpenAccount(true)}
							>
								<FavoriteBorderRoundedIcon />
							</IconButton>
						</>
					)}
					<IconButton component={Link} to="shop-cart" className="cursor-pointer" color="inherit">
						<ShoppingCartOutlinedIcon />
					</IconButton>
					<IconButton className="cursor-pointer" color="inherit">
						<SearchOutlinedIcon />
					</IconButton>
				</div>
			</header>
		</>
	);
};

export default Header;
