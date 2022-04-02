import slugify from "slugify";
import categoryModel from "../models/Category";
import productModel from "../models/Product";

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
	async create(req, res) {
		req.body.slug = slugify(req.body.title);
		try {
			const category = await new categoryModel(req.body).save();
			res.status(200).json(category);
			return
		} catch (error) {
			res.status(400).json(error);
		}
	},
	// GET CATEGORY
	async details(req, res) {
		try {
			const category = await categoryModel.find({ slug: req.params.slug }).exec();
			res.status(200).json(category);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// REMOVE
	async remove(req, res) {
		try {
			const category = await categoryModel.findOneAndDelete({ slug: req.params.slug }).exec();
			res.status(200).json(category);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// UPDATE
	async update(req, res) {
		req.body.slug = slugify(req.body.title);
		try {
			const category = await categoryModel.findOneAndReplace({ slug: req.params.slug }, req.body).exec();
			res.status(200).json(category);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// GET PRODUCTS BY SLUG
	async getproductsBySlug(req, res) {
		let products;
		let countDoc; const resultsPerPage = req.query.limit ? req.query.limit : 8;
		let page = req.query.page >= 1 ? req.query.page : 1;
		const order = req.query.order ? req.query.order : 'desc';
		page = page - 1;
		try {
			const category = await categoryModel.findOne({ slug: req.params.slug }).exec();
			if (!req.query.q) {
				products = await productModel.find({ category: category }).limit(resultsPerPage).sort({ _id: order })
					.skip(resultsPerPage * page).exec();
				countDoc = await productModel.countDocuments({ category: category }).exec()
			} else {
				products = await productModel
					.find({
						category: category,
						slug: {
							$regex: new RegExp(req.query.q),
						},
					}).limit(resultsPerPage).sort({ _id: order })
					.skip(resultsPerPage * page).exec();
				countDoc = await productModel.countDocuments({
					category: category,
					slug: {
						$regex: new RegExp(req.query.q),
					},
				}).exec()
			}

			res.status(200).json({ category, products, countDoc });
		} catch (error) {
			res.status(400).json(error);
		}
	},
};
export default categoryControll;
