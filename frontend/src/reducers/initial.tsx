type TInitial = {
	loading: boolean;
	toggle: boolean;
	category: String;
	sale: String;
	color: String[];
	size: String[];
	colorList: String[];
	categoryList: any[];
};
const initial: TInitial = {
	loading: false,
	toggle: false,
	category: "",
	sale: "",
	color: [],
	size: [],
	colorList: [],
	categoryList: [],
};
export default initial;
