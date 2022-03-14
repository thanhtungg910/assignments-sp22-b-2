import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		minlength: 5,
	},
});
export default mongoose.model("Categories", CategorySchema);
