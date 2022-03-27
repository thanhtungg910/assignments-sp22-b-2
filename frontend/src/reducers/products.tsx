import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { create, update } from "../api/products";
const handleReducer = (state: any, action: any) => {
	switch (action.type) {
		case "SET_INITIAL":
			return {
				...state,
				images: action.payload.albums,
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
					await Swal.fire({
						title: "Oop..!",
						text: error.response.data.message,
						icon: "error",
						confirmButtonText: `<a href="/">Sign in</a>`,
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
};
export default handleReducer;
