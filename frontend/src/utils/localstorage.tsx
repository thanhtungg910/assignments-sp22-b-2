const saveLocal = (title: string, data: any) =>
	localStorage.setItem(title, JSON.stringify(data));
const getLocal = (title: string) => {
	const local: string | null | any = localStorage.getItem(title);
	return JSON.parse(local) ?? false;
};
const removeLocal = (title: string) => localStorage.removeItem(title);
const loadState = () => {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};
export { saveLocal, getLocal, removeLocal, loadState };
