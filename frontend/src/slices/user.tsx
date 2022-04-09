import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { signin, signup } from "../api/users";
import Iuser from "../interfaces/user";

const initialState: Iuser = {
	accessToken: null,
	email: null,
	isActive: false,
	role: null,
	username: null,
	_id: null,
	wishlist: [],
	isLogger: false,
};
export const registerUser = createAsyncThunk(
	"auth/signup",
	async (user: Object, thunkAPI) => {
		try {
			const { data } = await signup(user);
			return data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);
export const login = createAsyncThunk(
	"auth/signin",
	async (user: Object, thunkAPI) => {
		try {
			const { data } = await signin(user);
			if (!data.user.isActive) {
				return thunkAPI.rejectWithValue(data.user.isActive);
			}
			return data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.message);
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
		signOut() {
			return initialState;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			const newData = {
				accessToken: action.payload.accessToken,
				email: action.payload.user.email,
				isActive: action.payload.user.isActive,
				role: action.payload.user.role,
				username: action.payload.user.username,
				_id: action.payload.user._id,
				wishlist: action.payload.user.wishlist,
				isLogger: true,
			};
			Object.assign(state, newData);
			sessionStorage.setItem(
				"refreshToken",
				JSON.stringify(action.payload.refreshToken)
			);
		});
	},
});
export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
