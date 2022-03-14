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
	// SEARC BY TITLE
	async searchTitle(req, res) {
		// if (!req.query.search) return req.redirect("/");
		const q = req.params.title;

		try {
			// const regex = new RegExp(escapeRegex(req.params.title), "gi");
			const products = await productModel
				.find(
					{
						title: {
							$regex: new RegExp(q),
						},
					},
					{
						_id: 0,
						_v: 0,
					}
				)
				.exec();
			res.status(200).json(products);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
};
export default productController;
