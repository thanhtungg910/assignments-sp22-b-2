import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import "babel-polyfill";

import App from "./App";
import rootReducer from "./reducers/rootReducer";
import "./index.css";
import { loadState, saveLocal } from "./utils/localstorage";
import { throttle } from "lodash";
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const persistedState = loadState();
const store = createStore(rootReducer, /* persistedState, */ composeEnhancers());
store.subscribe(
	throttle(() => {
		saveLocal("cart", store.getState().carts.value);
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
