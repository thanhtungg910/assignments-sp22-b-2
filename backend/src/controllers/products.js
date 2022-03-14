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
	// GET BY ID
	async getById(req, res) {
		try {
			const product = await productModel.find({ _id: req.params.id }).exec();
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
	async edit(req, res) {
		try {
			const product = await productModel
				.findByIdAndUpdate({ _id: req.params.id }, req.body)
				.exec();
			res.status(200).json(product);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// REMOVE
	async remove(req, res) {
		try {
			const product = await productModel
				.findByIdAndDelete({ _id: req.params.id })
				.exec();
			res.status(200).json(product);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
};
export default productController;
