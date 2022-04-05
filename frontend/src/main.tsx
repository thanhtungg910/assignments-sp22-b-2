import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import { throttle } from "lodash";
import App from "./App";
import rootReducer from "./reducers/rootReducer";
import "./index.css";
import { saveLocal } from "./utils/localstorage";
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const persistedState = loadState();
const store = createStore(
	rootReducer,
	/* persistedState, */ composeEnhancers()
);
store.subscribe(
	throttle(() => {
		const { value } = store.getState().carts;
		saveLocal("cart", value);
		const wishList: String[] = store.getState().wishList;
		if (wishList && wishList.length <= 0) return;
		saveLocal("wishList", wishList);
	}, 1000)
);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
