import ConversationModel from "../models/Conversation";
import MessModel from "../models/Message"
const conversationControll = {
	// ADD;
	async createConversation(req, res) {
		try {
			const conversation = await new ConversationModel({
				members: [req.body.email, req.body.admin], // [user, admin]
			}).save();
			const messSender = await new MessModel({ conversationId: conversation._id, sender: conversation.members[0] }).save()
			return res.status(200).json({ conversation, messSender })
		} catch (error) {
			res.status(400).json({ message: error })
		}
	},
	//GET ALL
	async getConversation(req, res) {
		try {
			const list = await ConversationModel.find({
				members: { $in: [req.params.userId] }
			}).exec()
			res.status(200).json(list)
		} catch (error) {
			res.status(400).json({ message: error })
		}
	}
}
export default conversationControll