import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import App from "./App";
import persistor, { store } from "./app/store";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
