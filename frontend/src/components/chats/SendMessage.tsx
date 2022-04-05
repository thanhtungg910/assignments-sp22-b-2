import { Button, TextField } from "@mui/material";
import React from "react";

type Props = {
	handleSendMessage: (e: React.FormEvent) => void;
	meg: String;
	setMsg: React.Dispatch<React.SetStateAction<String>>;
};

const SendMessage = ({ handleSendMessage, meg, setMsg }: Props) => {
	return (
		<form onSubmit={handleSendMessage}>
			<div className="flex justify-between">
				<TextField
					variant="standard"
					sx={{ width: "100%" }}
					placeholder="Messages"
					value={meg}
					onChange={(e) => setMsg(e.target.value)} //: React.ChangeEvent<HTMLInputElement>
				/>
				<Button type="submit">Send</Button>
			</div>
		</form>
	);
};

export default SendMessage;
