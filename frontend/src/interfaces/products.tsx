export type Ioptions = {
	name: String;
	value: String[];
};
interface IProducts {
	_id?: String;
	key?: React.Key;
	title: String;
	price: Number;
	saleoff: Number;
	options?: Ioptions[];
	image: String;
	albums?: String[] | any;
	slug?: String;
	category?: String;
	description?: String;
	quantity?: Number;
	createdAt?: Date;
	updatedAt?: Date;
}
export type ICart = {
	_id: String;
	title: String;
	price: Number | number | any;
	saleoff: Number;
	image: String;
	slug?: String;
	color: String;
	size: String;
	quantity: Number | number | any;
};
export default IProducts;
