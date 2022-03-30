const saveLocal = (title: string, data: any) => localStorage.setItem(title, JSON.stringify(data));
const getLocal = (title: string) => JSON.parse(localStorage.getItem(title)) ?? false;
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
