interface user {
	accessToken: String | null;
	email: String | null;
	isActive: Boolean;
	role: Number | null;
	username: String | null;
	_id: String | null;
	wishlist: [];
	isLogger: Boolean;
	message: null | String;
}
export default user;
