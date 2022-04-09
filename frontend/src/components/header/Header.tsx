import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PromoBanner from "../common/PromoBanner";
import Navigation from "../navigation/Navigation";
import logo from "../../logo.svg";
import DialogForm from "../../features/DialogForm";
import DrawerCart from "../common/DrawerCart";
import ChatsBox from "../../features/ChatsBox";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { changeCurrent } from "../../slices/cart";
import { signOut } from "../../slices/user";

const Header = () => {
	const [messageErr, setMessageErr] = React.useState<any>({
		message: null,
		type: null,
	});
	const user = useAppSelector((state) => state.users);
	const { current } = useAppSelector((state: any) => ({ ...state.carts }));

	// const wishListSele: String[] = useAppSelector(
	// 	(state: { wishList: String[] }) => state.wishList
	// );
	const dispatch = useAppDispatch();
	const [openAccount, setOpenAccount] = useState<boolean>(false);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	// useEffect(() => {
	// 	if (exist) {
	// 		if (wishListSele.length > 0 && wishListSele) {
	// 			createWishList({
	// 				wishlist: wishListSele,
	// 			});
	// 		}
	// 	}
	// 	saveExist(exist || username);
	// 	return () => saveExist(false);
	// }, [username, exist, wishListSele]);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = () => {
		setMessageErr({
			message: null,
			type: null,
		});
		setAnchorEl(null);
		dispatch(signOut(user));
	};
	const toggleDrawer = () => {
		dispatch(changeCurrent({ payload: false }));
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
			{/* FORM CHAT START*/}
			<ChatsBox />
			{/* FORM CHAT END */}
			<header className="w-full bg-white flex justify-between items-center px-10 py-3">
				<picture className="w-20 ml-4">
					<img src={logo} className="object-cover w-full" />
				</picture>
				<Navigation></Navigation>
				<div className="flex gap-5 justify-center items-center">
					{user.username ? (
						<>
							<Typography>Hi! {user.username}</Typography>
							<IconButton
								color="inherit"
								aria-controls={user.username ? "basic-menu" : undefined}
								aria-haspopup="true"
								aria-expanded={user.username ? "true" : undefined}
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
								{user.role == 1 && (
									<Link to="/admin">
										<MenuItem>Dashboard</MenuItem>
									</Link>
								)}
								<MenuItem>Profile</MenuItem>
								<MenuItem>My account</MenuItem>
								<MenuItem component={Link} to="my-cart" onClick={handleClose}>
									My Cart
								</MenuItem>
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
					<IconButton
						component={Link}
						to="shop-cart"
						className="cursor-pointer"
						color="inherit"
					>
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
