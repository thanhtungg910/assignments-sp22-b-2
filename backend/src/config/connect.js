import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const db = {
	async connect() {
		try {
			await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
				console.log("-----> Connected to db <-----");
			});
		} catch (error) {
			console.log(error);
		}
	},
};
export default db;
