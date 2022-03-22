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
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ message: error });
	}
}
/* async function handleColor(req, res, color) {
	console.log(color);
	try {
		const products = await productModel
			.find({
				options: {
					$elemMatch: {
						name: "color",
						value: color,
					},
				},
			})
			.exec();
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ messages: error });
	}
} */
async function handleOptions(req, res, options) {
	const { color, size } = options;
	try {
		const products = await productModel
			.find({
				$and: [
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
			})
			.exec();
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ messages: error });
	}
}
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
	// GET BY Slug
	async getSlug(req, res) {
		console.log(req.params);
		try {
			// const product = await productModel.find({ slug: req.params.slug }).exec();
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
				.findOneAndUpdate({ slug: req.params.slug }, req.body)
				.exec();
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
			await handlePrice(req, res, price);
		}
		// [color, size]
		if (options) {
			await handleOptions(req, res, options);
		}
	},
};
export default productController;
