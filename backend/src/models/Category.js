import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		minlength: 5,
	},
	slug: {
		type: String,
		minlength: 5,
		lowercase: true,
		index: true,
		unique: true,
	},
});
export default mongoose.model("Categories", CategorySchema);
