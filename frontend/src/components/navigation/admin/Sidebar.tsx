import * as React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import CategoryIcon from "@mui/icons-material/Category";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
const Sidebar: React.FC = () => {
	return (
		<>
			<ListItemButton component={Link} to="">
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItemButton>
			<ListItemButton component={Link} to="categories">
				<ListItemIcon>
					<CategoryIcon />
				</ListItemIcon>
				<ListItemText primary="Categories" />
			</ListItemButton>
			<ListItemButton component={Link} to="products">
				<ListItemIcon>
					<ShoppingBasketIcon />
				</ListItemIcon>
				<ListItemText primary="Products" />
			</ListItemButton>
			<ListItemButton component={Link} to="orders">
				<ListItemIcon>
					<ShoppingCartIcon />
				</ListItemIcon>
				<ListItemText primary="Orders" />
			</ListItemButton>
			<ListItemButton component={Link} to="customers">
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary="Customers" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<ChatBubbleOutlineIcon />
				</ListItemIcon>
				<ListItemText primary="Chats" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<LayersIcon />
				</ListItemIcon>
				<ListItemText primary="Integrations" />
			</ListItemButton>
		</>
	);
};
export const SecondaryListItems = () => {
	return (
		<>
			<ListSubheader component="div" inset>
				Saved reports
			</ListSubheader>
			<ListItemButton>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="Current month" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="Last quarter" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="Year-end sale" />
			</ListItemButton>
		</>
	);
};
export default Sidebar;
