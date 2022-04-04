import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Fab, Snackbar, Button, Card } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import Chat from "../components/chats/Chat";
import SendMessage from "../components/chats/SendMessage";
import { DefaultEventsMap } from "@socket.io/component-emitter";
type Props = {};
const ENDPOINT = "http://localhost:3001";
let socket: Socket<DefaultEventsMap, DefaultEventsMap>;
const ChatsBox = (props: Props) => {
	const [open, setOpen] = useState<boolean>(false);
	const [messages, setMessages] = useState<[]>([]);
	const [meg, setMsg] = useState<String>("");
	useEffect(() => {
		socket = io(ENDPOINT, { transports: ["websocket"] });
		console.log(
			"🚀 ~ file: ChatsBox.tsx ~ line 16 ~ useEffect ~ socket",
			socket
		);
		socket.emit("on-data", { message: "test- data" }, (error: any) => {
			if (error) {
				alert(error);
			}
		});
		socket.on("response", (...arg) => {
			console.log({ ...arg });
		});
	}, [socket]);
	const handleOpen: () => void = () => {
		setOpen(!open);
	};
	const handleSendMessage: () => void = () => {};

	return (
		<>
			<Fab
				color="secondary"
				sx={{
					position: "fixed",
					zIndex: 999,
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
