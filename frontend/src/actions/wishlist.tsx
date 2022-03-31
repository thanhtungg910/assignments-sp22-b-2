const addToWishList = (id: String | []) => {
	return { type: "ADD_WISH_LIST", payload: id };
};
const addToWishListAsUser = (data: String[]) => {
	return { type: "ADD_WISH_LIST_AS_USER", payload: data };
};
const removeItemInWishList = (id: String) => {
	return { type: "REMOVE_ITEM", payload: id };
};
export { addToWishList, removeItemInWishList, addToWishListAsUser };
