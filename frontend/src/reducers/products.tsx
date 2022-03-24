import { create } from "../api/products";
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
			const createProduct = async () => {
				await create(action.payload.data);
			};
			createProduct();
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
