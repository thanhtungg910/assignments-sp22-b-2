import MessModel from "../models/Message"
const messageControll = {
	// ADD;
	async sendMess(req, res) {
		try {
			const mess = await new MessModel(req.body).save();
			return res.status(200).json(mess)
		} catch (error) {
			res.status(400).json({ message: error })
		}
	}
}
export default messageControll