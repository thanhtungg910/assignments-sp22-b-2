import mongoose, { ObjectId } from "mongoose";

const CartShema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	quantity: {
		type: Number,
		required: true

	},
	buy: {
		type: ObjectId,
		ref: "Products",
		required: true

	},
	userId: {
		type: ObjectId,
		ref: "Users",
		required: true
	},
	status: {
		type: Number,
		default: 0
	},
	payment: {
		type: Boolean,
		default: true
	},
	price: {
		type: Number,
		default: 0
	},
	color: {
		type: String,
	},
	size: {
		type: String
	}
}, { timestamps: true })
export default mongoose.model("Carts", CartShema)