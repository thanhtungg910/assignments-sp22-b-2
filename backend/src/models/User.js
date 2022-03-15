import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
	username: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		minLength: 5,
	},
	password: {
		type: String,
		required: true,
		minLength: 5,
	},
	avatar: {
		type: String,
		default:
			"https://2.bp.blogspot.com/-muVbmju-gkA/Vir94NirTeI/AAAAAAAAT9c/VoHzHZzQmR4/s1600/placeholder-image.jpg",
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	phone: {
		type: Number,
	},
	status: {
		type: Boolean,
		default: false,
	},
});
export default mongoose.model("Users", UserSchema);
