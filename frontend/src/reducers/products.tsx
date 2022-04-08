import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { create, update } from "../api/products";
import { removeLocal } from "../utils/localstorage";
/* const handleReducer = (state: any, action: any) => {
	switch (action.type) {
		case "SET_INITIAL":
			return {
				...state,
				color: action.payload.color,
				size: action.payload.size,
			};
		case "LOADING":
			return { ...state, loading: action.payload };
		case "SET_DATA":
			return { ...state, [action.brand]: [...action.payload] };
		case "CHANGE_MULTI":
			return { ...state, [action.brand]: [...action.payload] };
		case "CHANGE":
			return { ...state, [action.brand]: [...action.payload] };
		case "CREATE_PRODUCT":
			const start = async () => {
				try {
					const res = await create(action.payload.data);
					if (res) {
						return {
							...state,
							loading: action.loading,
							toggle: action.toggle,
							color: action.payload.color,
							size: action.payload.size,
						};
					}
				} catch (error: any) {
					removeLocal("user");
					removeLocal("refreshToken");
					await Swal.fire({
						title: "Oop..!",
						text: error.response.data.message,
						icon: "error",
						confirmButtonText: `<a href="/">Exit</a>`,
					});
				}
			};

			start();
			return state;
		case "UPDATE_PRODUCT":
			const updateProduct = async () => {
				await update(action.payload.data);
			};
			updateProduct();
			return {
				...state,
				loading: action.loading,
				toggle: action.toggle,
				color: action.payload.color,
				size: action.payload.size,
			};
		case "TOGGLE":
			return { ...state, toggle: action.toggle };
		default:
			break;
	}

	return state;
}; */
const initialState = {
	loading: false,
	toggle: false,
	category: "",
	sale: "",
	color: [],
	size: [],
	colorList: [],
	categoryList: [],
};
export const addProduct = createAsyncThunk(
	"product/addProduct",
	async (product) => {
		console.log(product);
		const { data } = await create(product);
		return data;
	}
);
const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setInitial(state, action) {
			return {
				...state,
				color: action.payload.color,
				size: action.payload.size,
			};
		},
		loading(state, action) {
			return { ...state, loading: action.payload };
		},
		setData(state, action: any) {
			/* CHANGE_MULTI , CHANGE */
			return { ...state, [action.brand]: [...action.payload] };
		},
		extraReducers: (builder) => {
			builder.addCase(addProduct.fulfilled, (state: any, action: any) => {
				console.log("🚀 => builder.adCase => state,action", state, action);
			});
		},
	},
});
export const { setInitial, loading, setData } = productSlice.actions;

export default productSlice.reducer;
