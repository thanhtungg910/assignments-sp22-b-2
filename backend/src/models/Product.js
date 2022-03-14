import mongoose from "mongoose";
const productSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			minlength: 5,
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
		quantity: {
			type: Number,
			default: 1,
		},
	},
	{
		timestamps: true,
	}
);
export default mongoose.model("Products", productSchema);
