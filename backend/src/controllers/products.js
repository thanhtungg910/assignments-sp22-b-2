import slugify from "slugify";
import productModel from "../models/Product";

async function handlePrice(req, res, price) {
	try {
		const products = await productModel
			.find({
				price: {
					$gte: price[0],
					$lte: price[1],
				},
			})
			.exec();
		return res.status(200).json(products);
	} catch (error) {
		return res.status(400).json({ message: error });
	}
}
async function handleOptions(req, res, options) {
	const { color, size } = options;
	try {
		const fil = {
			$or: [
				{
					options: {
						$elemMatch: {
							name: "color",
							value: { $in: color },
						},
					},
				},
				{
					options: {
						$elemMatch: {
							name: "size",
							value: { $in: size },
						},
					},
				},
			],
		}
		const products = await productModel
			.find(fil)
			.exec();
		const countDoc = await productModel.countDocuments(fil).exec()
		res.status(200).json({ products, countDoc });
	} catch (error) {
		res.status(400).json({ messages: error });
	}
}

const productController = {
	// GET & SEARCH ALL RECORDS
	async getAll(req, res) {
		let products;
		let countDoc;
		const resultsPerPage = req.query.limit ? req.query.limit : 5;
		let page = req.query.page >= 1 ? req.query.page : 1;
		const order = req.query.order ? req.query.order : 'desc';
		page = page - 1;
		countDoc = await productModel.countDocuments().exec()
		try {
			if (!req.query.q & req.query.page != 0) {
				products = await productModel.find().exec();
			}
			if (!req.query.q) {
				products = await productModel.find().limit(resultsPerPage).sort({ _id: order })
					.skip(resultsPerPage * page).exec();

			} else {
				products = await productModel
					.find({
						title: {
							$regex: new RegExp(req.query.q),
						},
					}).sort({ _id: order })
					.limit(resultsPerPage)
					.skip(resultsPerPage * page).exec();
				countDoc = await productModel.countDocuments({
					title: {
						$regex: new RegExp(req.query.q),
					}
				}).exec()
			}
			return res.status(200).json({ products, countDoc });

		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// GET RELATED
	async listRelated(req, res) {
		try {
			const product = await productModel.find({ slug: req.params.slug }).exec();
			const related = await productModel
				.find({
					_id: { $ne: product._id },
				})
				.limit(6)
				.exec();
			res.status(200).json(related);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// GET BY Slug
	async getSlug(req, res) {
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
		req.body.slug = slugify(req.body.title);
		try {
			const product = await productModel.findOneAndUpdate({ _id: req.params.id }, req.body).exec();
			res.status(200).json(product);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// REMOVE
	async remove(req, res) {
		try {
			const product = await productModel.findOneAndDelete({ slug: req.params.slug }).exec();
			res.status(200).json(product);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	},
	// Filter
	async searchfilter(req, res) {
		const { price, options } = req.body;
		// [20, 100]
		if (price != undefined) {
			return await handlePrice(req, res, price);
		}
		// [color, size]
		if (options) {
			await handleOptions(req, res, options);
		}
	},
};
export default productController;
