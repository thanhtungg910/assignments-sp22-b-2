const check = (req, res, next) => {
	const access = true;
	if (!access) return res.redirect("/");
	next();
};
export default check;
