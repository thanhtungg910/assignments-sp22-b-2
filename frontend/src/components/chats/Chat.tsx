import React from "react";

type Props = {
	messages: [];
};

const Chat = ({ messages }: Props) => {
	console.log("🚀 ~ file: Chat.tsx ~ line 8 ~ Chat ~ messages", messages);

	return <div>Chat</div>;
};

export default Chat;
