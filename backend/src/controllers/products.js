import productModel from "../models/Product";
const productController = {
	// GET ALL RECORDS
	getAll(req, res) {
		console.log(11);
	},
	// CREATE
	create(req, res) {
		try {
			const product = new productModel(req.body);
			res.status(200).json(product);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
};
export default productController;
