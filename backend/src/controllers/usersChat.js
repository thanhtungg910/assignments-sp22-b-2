import UsersChat from "../models/UsersChat";

const addUser = async (user, socketId) => {
	const usersChat = [user, socketId]
	try {
		const existUser = await UsersChat.findOne({
			usersChat: { $in: user }
		}).exec();
		if (!existUser) {
			await new UsersChat({ usersChat }).save();
			return
		} else {
			return await UsersChat.findOneAndUpdate({
				usersChat: { $in: user }
			}, usersChat).exec();
		}
	} catch (error) {
		console.log(error);
	}
};
const getUser = async (user) => {
	try {
		const existUser = await UsersChat.findOne({
			usersChat: { $in: user }
		}).exec();
		return existUser
	} catch (error) {
		console.log(error);
	}

};

export { addUser, getUser }