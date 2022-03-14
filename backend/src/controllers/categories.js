import categoryModel from "../models/Category";

const categoryControll = {
	// CATEGORY
	async getAll(req, res) {
		try {
			const categori = await categoryModel.find().exec();
			res.status(200).json(categori);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// CREATE CATEGORY
	create(req, res) {
		const categori = new categoryModel(req.body).save();
		res.status(200).json(categori);
	},
	// GET CATEGORY
	async getCategory(req, res) {
		try {
			const category = await categoryModel.find({ _id: req.params.id }).exec();
			res.status(200).json(category);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
};
export default categoryControll;
