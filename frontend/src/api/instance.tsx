import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:5001/api",
	headers: {
		"Content-type": "application/json",
	},
});
export default instance;
