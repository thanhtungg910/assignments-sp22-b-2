import mongoose, { ObjectId } from "mongoose";

const MessageSchema = new mongoose.Schema({
	sender: { //Nguoi gui
		type: String, // Name
		required: true
	},
	message: {
		type: String,
		default: ' '
	}
}, { timestamps: true })
export default mongoose.model("Messages", MessageSchema)