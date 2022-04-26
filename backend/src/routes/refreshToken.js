import jwt from "jsonwebtoken";
import TokenModel from "../models/RefeshToken";
require("dotenv").config();
import { Router } from "express";
import { generateToken, updateRefeshToken } from "../utils";
const router = Router();
router.post("/", async (req, res) => {
	try {
		const refreshToken = req.body.refreshToken;
		if (!refreshToken) return res.sendStatus(400);
		const user = await TokenModel.findOne({ refreshToken: refreshToken }).exec();
		if (!user) return res.sendStatus(403);
		jwt.verify(refreshToken, process.env.REFRESH_KEY, function (err, data) {
			if (err) {
				return res.sendStatus(403).json({ message: "Token in valid" });
			}
			const token = generateToken(data);
			updateRefeshToken(data._id, data.email, token.refreshToken);
			return res.json({ accessToken: token.accessToken, refreshToken: token.refreshToken });
		});
	} catch (error) {
		console.log(error);
	}
});
router.delete("/logout", async (req, res) => {
	/* 	try {
		await TokenModel.updateMany({}, { refreshToken: "" }).exec();
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
	} */
});
export default router;
