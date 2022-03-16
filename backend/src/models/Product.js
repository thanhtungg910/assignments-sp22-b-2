import mongoose, { ObjectId } from "mongoose";
const productSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			minlength: 5,
		},
		slug: {
			type: String,
			unique: true,
			index: true,
			minlength: 5,
			lowercase: true,
		},
		image: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
			minlength: 10,
		},
		saleoff: {
			type: Number,
			default: 0,
		},
		albums: {
			type: Array,
		},
		quantity: {
			type: Number,
			default: 1,
		},
		category: {
			type: ObjectId,
			ref: "Categories",
		},
	},
	{
		timestamps: true,
	}
);
export default mongoose.model("Products", productSchema);
