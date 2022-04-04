import mongoose from "mongoose"
const ConversationSchema = new mongoose.Schema({
	members: {
		type: Array, // [author, admin]
	},
}, { timestamps: true });
export default mongoose.model("Conversations", ConversationSchema)