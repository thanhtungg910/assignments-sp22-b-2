import categoriModel from "../models/Category";

const categoryControll = {
	// CREATE CATEGORY
	create(req, res) {
		const categori = new categoriModel(req.body).save();
		res.status(200).json(categori);
	},
};
export default categoryControll;
