import slugify from "slugify";
import productModel from "../models/Product";
const productController = {
	// GET & SEARCH ALL RECORDS
	async getAll(req, res) {
		let products;
		try {
			if (!req.query.q) {
				products = await productModel.find().exec();
			} else {
				products = await productModel
					.find({
						title: {
							$regex: new RegExp(req.query.q),
						},
					})
					.exec();
			}
			res.status(200).json(products);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// GET BY ID
	async getById(req, res) {
		try {
			const product = await productModel.find({ slug: req.params.slug }).exec();
			res.status(200).json(product);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// CREATE
	create(req, res) {
		req.body.slug = slugify(req.body.title);
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
				.findByIdAndUpdate({ slug: req.params.slug }, req.body)
				.exec();
			res.status(200).json(product);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// REMOVE
	async remove(req, res) {
		try {
			const product = await productModel.findByIdAndDelete({ slug: req.params.slug }).exec();
			res.status(200).json(product);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
};
export default productController;
