import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:5001/chats",
	headers: {
		"Content-type": "application/json",
	},
});
const createConversation = (data: { email: String /* User */ }) => {
	const url = `/conversation`;
	return instance.post(url, data);
};
export { createConversation };
