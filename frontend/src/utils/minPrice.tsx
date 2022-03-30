const min = (products: []) => {
	const min = products.map((item: any) => `${item.price}`).reduce((a, b) => Math.min(a, b));
	return +min;
};
const max = (products: []) => {
	const max = products.map((item: any) => `${item.price}`).reduce((a, b) => Math.max(a, b));
	return +max;
};

export { min, max };
