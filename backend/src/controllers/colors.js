import colorsModel from "../models/Color";
const ColorsControl = {
	async list(req, res) {
		try {
			const colors = await colorsModel.find().exec();
			res.status(200).json(colors);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
};
export default ColorsControl;
