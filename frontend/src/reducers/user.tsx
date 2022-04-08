import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { signup } from "../api/users";
import user from "../interfaces/user";

const initialState: user = {
	accessToken: null,
	email: null,
	isActive: false,
	role: null,
	username: null,
	_id: null,
	wishlist: [],
	isLogger: false,
	message: null,
};
export const registerUser = createAsyncThunk(
	"auth/signup",
	async (user: Object) => {
		try {
			const { data } = await signup(user);
			return data;
		} catch (error: any) {
			return {
				type: "auth/signup/rejected",
				message: error.response.data.message,
			};
		}
	}
);
const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		signIn(state, action) {
			state.username = action.payload;
		},
		signOut() {},
	},
});
export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
