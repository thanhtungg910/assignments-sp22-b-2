interface Iuser {
	accessToken: String | null;
	email: String | null;
	isActive: Boolean;
	role: Number | null;
	username: String | null;
	_id: String | null;
	wishlist: [];
	isLogger: Boolean;
}
export default Iuser;
