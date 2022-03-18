import mongoose from "mongoose";
import { createHmac } from "crypto";
import { v4 as uuid4 } from "uuid";
const UserSchema = mongoose.Schema(
	{
		username: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			minLength: 5,
		},
		hashed_password: {
			type: String,
			required: true,
			minLength: 5,
		},
		avatar: {
			type: String,
			default:
				"https://2.bp.blogspot.com/-muVbmju-gkA/Vir94NirTeI/AAAAAAAAT9c/VoHzHZzQmR4/s1600/placeholder-image.jpg",
		},
		role: {
			type: Number,
			default: 0,
		},
		phone: {
			type: Number,
			required: false,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true }
);
UserSchema.virtual("password").set(function (password) {
	this.salt = uuid4();
	this.hashed_password = this.encrytPassword(password);
});
UserSchema.method({
	purr: function () {},
	encrytPassword(password) {
		if (!password) return;
		try {
			return createHmac("sha256", this.salt).update(password).digest("hex");
		} catch (error) {
			console.log(error);
		}
	},
});
// UserSchema.methods = {
// 	/**
// 	 *
// 	 * @param {*} password DÙNG ĐỂ ĐĂNG NHẬP
// 	 */
// 	authenticate(password) {
// 		return this.encrytPassword(password) == this.hashed_password;
// 	},
// 	/**
// 	 *
// 	 * @param {*} password DÙNG ĐỂ MÃ HÓA
// 	 */
// 	encrytPassword(password) {
// 		if (!password) return;
// 		try {
// 			return createHmac("sha256", this.salt).update(password).digest("hex");
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	},
// };

// UserSchema.virtual("password").set(function (password) {
// 	// abcde
// 	this.salt = uuid4(); //9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
// 	this.hashed_password = this.encrytPassword(password);
// });
// UserSchema.methods = {
// 	authenticate(password) {
// 		return this.encrytPassword(password) == this.hashed_password;
// 	},
// 	encrytPassword(password) {
// 		if (!password) return;
// 		try {
// 			const hash = createHmac("sha256", this.salt).update(password).digest("hex");
// 			return hash;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	},
// };
export default mongoose.model("Users", UserSchema);
