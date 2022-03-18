import mongoose from "mongoose";
import UserModel from "../models/User";
const authControll = {
	async signUp(req, res) {
		try {
			const { email, username, password } = req.body;
			const user = await new UserModel({ email, username, password }).save();
			res.status(200).json(user);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
};
export default authControll;
