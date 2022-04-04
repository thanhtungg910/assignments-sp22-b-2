import mongoose, { ObjectId } from "mongoose";

const MessageSchema = new mongoose.Schema({
	conversationId: {
		type: ObjectId
	},
	sender: { //Nguoi gui
		type: String, // Name
		required: true
	},
	message: {
		type: String
	}
}, { timestamps: true })
export default mongoose.model("Messages", MessageSchema)