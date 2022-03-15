import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
export default function BasicBreadcrumbs() {
	return (
		<div role="presentation" className="p-2 px-10">
			<Breadcrumbs aria-label="breadcrumb">
				<Link to="/" className="hover:underline">
					Home
				</Link>
				<Typography color="text.primary">Products</Typography>
			</Breadcrumbs>
		</div>
	);
}
