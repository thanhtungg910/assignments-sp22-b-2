import productModel from "../models/Product";
const productController = {
	// GET ALL RECORDS
	async getAll(req, res) {
		try {
			const product = await productModel.find().exec();
			res.status(200).json(product);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// CREATE
	create(req, res) {
		try {
			const product = new productModel(req.body).save();
			res.status(200).json(product);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// UPDATE
};
export default productController;
