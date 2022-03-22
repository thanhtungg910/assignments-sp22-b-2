import React from "react";
import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";

type Props = {
	loading: boolean;
	open: boolean;
	setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Alerts: React.FC<Props> = ({ loading, open, setToggle }: Props) => {
	return (
		<>
			<Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
				<CircularProgress color="inherit" />
			</Backdrop>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={open}
				autoHideDuration={4000}
				onClose={() => setToggle(false)}
				// key={vertical + horizontal}
			>
				<Alert variant="filled" severity="success">
					Success — check it out!
				</Alert>
			</Snackbar>
		</>
	);
};

export default Alerts;
