import mongoose, { ObjectId } from "mongoose";

const TokenModel = new mongoose.Schema(
	{
		id: {
			type: ObjectId,
			ref: "Users",
		},
		email: {
			type: String,
		},
		refreshToken: {
			type: String,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
);
export default mongoose.model("Refesh_tokens", TokenModel);
