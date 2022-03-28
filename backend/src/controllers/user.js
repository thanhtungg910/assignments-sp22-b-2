import UserModel from "../models/User"
const userById = async (req, res, next, id) => {
	try {
		const user = await UserModel.findById({ _id: id }).exec();
		if (!user) {
			return res.status(400).json({
				message: "Account empty!"
			})
		}
		req.profile = user;
		req.profile.password = undefined;
		req.profile.salt = undefined;
		return next();
	} catch (error) {
		return res.status(400).json({
			message: error
		})
	}
}
export default userById