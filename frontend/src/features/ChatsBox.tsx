import React, { useState } from "react";
import { Fab, Snackbar, Button, Card } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { Box } from "@mui/system";
import Chat from "../components/chats/Chat";
import SendMessage from "../components/chats/SendMessage";
type Props = {};

const ChatsBox = (props: Props) => {
	const [open, setOpen] = useState<boolean>(false);
	const [messages, setMessages] = useState<[]>([]);
	const [meg, setMsg] = useState<String>("");
	const handleOpen: () => void = () => {
		setOpen(!open);
	};
	const handleSendMessage: () => void = () => {};

	return (
		<>
			<Fab
				color="secondary"
				sx={{
					position: "absolute",
					bottom: (theme) => theme.spacing(2),
					right: (theme) => theme.spacing(2),
				}}
				onClick={handleOpen}
			>
				<ChatIcon />
			</Fab>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				action={
					<Button color="inherit" size="small">
						Undo
					</Button>
				}
				sx={{
					marginBottom: 5,
					marginRight: 3,
				}}
			>
				<Card sx={{ width: 300, minHeight: 300 }} className="flex flex-col">
					<Chat messages={messages} />
					<SendMessage
						handleSendMessage={handleSendMessage}
						meg={meg}
						setMsg={setMsg}
					/>
				</Card>
			</Snackbar>
		</>
	);
};

export default ChatsBox;
