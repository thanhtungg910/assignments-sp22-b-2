import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		lowercase: true,
		index: true,
		unique: true,
	},
}, { timestamps: true });
export default mongoose.model("Categories", CategorySchema);
