import jwt from "jsonwebtoken";
require("dotenv").config();
import UserModel from "../models/User";

const verify = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(403).json({ message: "Fobidden" });
	}
	const token = authHeader.split(" ")[1];
	jwt.verify(token, process.env.SECRET_KEY, function (err, data) {
		if (err) {
			return res.status(400).json({ message: "Token invalid" });
		}
		req.user = data;
		return next();
	});
};
const isAdmin = async (req, res, next) => {
	try {
		const user = await UserModel.findOne({ email: req.user.email }).exec();
		if (!user) return res.status(403).json("Account empty");
		if (user.role == 0) return res.status(400).json("You have no authority!");
		return next();
	} catch (error) {}
};

export { isAdmin };
export default verify;
