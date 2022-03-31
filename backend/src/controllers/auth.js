import jwt from "jsonwebtoken";
import UserModel from "../models/User";
require("dotenv").config();
import { generateToken, updateRefeshToken } from "../utils";
import TokenModel from "../models/RefeshToken";
const authControll = {
	async signUp(req, res) {
		const { email, username, password } = req.body;
		try {
			const exitUser = await UserModel.find({ email }).exec();
			if (exitUser.length > 0) {
				return res.status(400).json({ message: "Email already exist! Please a new account" });
			}
			const user = await new UserModel({ email, username, password }).save();
			res.status(200).json(user);
		} catch (error) {
			res.status(400).json({ message: "Sign up false!" });
		}
	},
	async signIn(req, res) {
		const { email, password } = req.body;
		try {
			const user = await UserModel.findOne({ email }).exec();
			if (!user)
				return res.status(400).json({ message: "Email does not exist! Please a new account" });
			if (!user.authenticate(password)) {
				return res.status(400).json({ message: "Incorrect password!" });
			}
			const { accessToken, refreshToken } = generateToken({ email: user.email });
			/* const options = {
				maxAge: 24 * 60 * 60 * 100,
				secure: true,
				httpOnly: true,
				sameSite: 'none'
			}
			res.cookie('refreshToken', refreshToken, options); */
			await updateRefeshToken(user._id, user.email, refreshToken);
			res.status(200).json({ accessToken, refreshToken, user });
		} catch (error) {
			res.status(400).json({ message: "Login false!" });
		}
	},
	async wishList(req, res) {
		console.log(req.params.id);
		try {
			const wishList = await UserModel.findOneAndUpdate({ _id: req.params.id }, req.body).exec();
			res.status(200).json(wishList)
		} catch (error) {
			res.sendStatus(400).json({ message: error })
		}
	}
};
export default authControll;
