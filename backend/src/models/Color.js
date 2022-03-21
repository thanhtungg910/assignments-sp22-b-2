import mongoose from "mongoose";
const ColorSchema = new mongoose.Schema({
	nameId: {
		type: Number,
	},
	hexCode: {
		type: String,
	},
	name: {
		type: String,
	},
});
export default mongoose.model("Colors", ColorSchema);
