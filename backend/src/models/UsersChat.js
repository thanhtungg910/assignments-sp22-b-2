import mongoose from "mongoose";
const UsersChatSchema = new mongoose.Schema({
	usersChat: {
		type: []
	}
});
export default mongoose.model("Users_chats", UsersChatSchema)