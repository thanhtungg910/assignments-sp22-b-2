import jwt from "jsonwebtoken";
require("dotenv").config();
import TokenModel from "./models/RefeshToken";
const generateToken = (payload) => {
	const { email } = payload;
	const accessToken = jwt.sign({ email: email }, process.env.SECRET_KEY, { expiresIn: "1m" });
	const refreshToken = jwt.sign({ email: email }, process.env.REFRESH_KEY, { expiresIn: "2m" });
	return { accessToken, refreshToken };
};
const updateRefeshToken = async (id, email, refreshToken) => {
	try {
		const result = await TokenModel.findOne({ email: email });
		if (result) {
			await TokenModel.findOneAndUpdate({ email: email, _id: id }, { refreshToken: refreshToken });
		} else {
			await new TokenModel({
				_id: id,
				email: email,
				refreshToken: refreshToken,
			}).save();
		}
	} catch (error) {
		console.log(error);
	}
};
export { generateToken, updateRefeshToken };
