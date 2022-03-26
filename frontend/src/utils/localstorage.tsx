const saveLocal = (title: string, data: any) => localStorage.setItem(title, JSON.stringify(data));
const getLocal = (title: string) => JSON.parse(localStorage.getItem(title)) ?? false;
const removeLocal = (title: string) => localStorage.removeItem(title);
export { saveLocal, getLocal, removeLocal };
