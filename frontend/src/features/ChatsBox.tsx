import React, { useEffect, useState } from "react";
import { Fab, Snackbar, Button, Card, TextField } from "@mui/material";
import { io } from "socket.io-client";
import ChatIcon from "@mui/icons-material/Chat";
import Chat from "../components/chats/Chat";
import SendMessage from "../components/chats/SendMessage";
import { getLocal, saveLocal } from "../utils/localstorage";
import { createConversation } from "../api/chats";

const ENDPOINT = "http://localhost:5001";

const ChatsBox = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [sender, setSender] = useState<String>("");
	const [messages, setMessages] = useState<{ name: String; text: String }[]>(
		[]
	);
	const [meg, setMsg] = useState<String>("");
	const [socket, setSocket] = useState<any>(null);
	const [room, setRomm] = useState("");
	useEffect(() => {
		setSocket(io(ENDPOINT, { transports: ["websocket"] }));
	}, []);
	useEffect(() => {
		socket?.on("message", (message: any) => {
			console.log("🚀 => useEffect => message", message);
		});
		socket?.on("roomData", (room: any) => {
			console.log("🚀 => socket.on => room", room);
		});
	}, [socket]);

	const handleOpen: () => void = () => {
		setOpen(!open);
	};
	const handleSendMessage: (e: React.FormEvent) => void = (
		e: React.FormEvent
	) => {
		e.preventDefault();
		socket?.emit("sendMessage", meg, () => setMsg(""));
	};
	const handleSaveLoginChat: (e: React.FormEvent) => void = async (
		e: React.FormEvent
	) => {
		e.preventDefault();
		//SEND
		socket?.emit("join", { name: sender, room: room }, () => {});
		saveLocal("userChat", sender);
		setOpen(!open);
	};
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
				<Card
					sx={{ width: 300, minHeight: 300, padding: 2 }}
					className="flex flex-col"
				>
					{getLocal("userChat") ? (
						<>
							<Chat messages={messages} />
							<SendMessage
								handleSendMessage={handleSendMessage}
								meg={meg}
								setMsg={setMsg}
							/>
						</>
					) : (
						<form
							className="w-full flex flex-col gap-3"
							onSubmit={handleSaveLoginChat}
						>
							<TextField
								placeholder="Email"
								value={sender}
								onChange={(e) => setSender(e.target.value)}
							/>
							<TextField
								placeholder="Phone"
								value={room}
								onChange={(e) => setRomm(e.target.value)}
							/>
							<Button type="submit">Send</Button>
						</form>
					)}
				</Card>
			</Snackbar>
		</>
	);
};

export default ChatsBox;
