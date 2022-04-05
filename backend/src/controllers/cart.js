import CartModel from "../models/cart";
import ProductModel from "../models/Product";
const cartControl = {
	async create(req, res) {
		try {
			console.log(req.body)
			const order = await new CartModel(req.body).save();
			res.status(200).json(order)
			return
		} catch (error) {
			console.log(2);
			return res.status(400).json({ message: error })
		}
	},
	async getOrderList(req, res) {
		try {
			const orders = await CartModel.find().exec();
			res.status(200).json(orders)
			return
		} catch (error) {
			console.log(2);
			return res.status(400).json({ message: error })
		}
	},
	async updatetOrderList(req, res) {
		try {
			const orders = await CartModel.findOneAndUpdate({ _id: req.params.id }, req.body).exec();
			res.status(200).json(orders)
			return
		} catch (error) {
			console.log(2);
			return res.status(400).json({ message: error })
		}
	},
	async detailOrder(req, res) {
		try {
			const { authorId } = req.params
			const orders = await CartModel.find({ userId: authorId }).exec();
			return res.status(200).json(orders)
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}
}
export default cartControl