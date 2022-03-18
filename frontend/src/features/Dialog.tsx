import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(3),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(6),
	},
}));

export interface DialogTitleProps {
	id: string;
	children?: React.ReactNode;
	onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};
type DialogForm = {
	open: boolean;
	children: React.ReactNode;
	onClose: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function DialogForm({ open, onClose, children }: DialogForm) {
	const handleClose = () => {
		onClose(false);
	};

	return (
		<div>
			<BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
					Login
				</BootstrapDialogTitle>
				<DialogContent dividers>{children}</DialogContent>
				<DialogActions
					sx={{
						display: "flex",
						flexDirection: "column",
						rowGap: 2,
					}}
				>
					Or sign up using?
					<Box
						sx={{
							display: "flex",
							gap: 2,
						}}
					>
						<IconButton>
							<FacebookIcon color="info" />
						</IconButton>
						<IconButton>
							<LanguageOutlinedIcon color="primary" />
						</IconButton>
					</Box>
					<Typography>
						Not a member?<a href="/">Sign up</a>
					</Typography>
				</DialogActions>
			</BootstrapDialog>
		</div>
	);
}
