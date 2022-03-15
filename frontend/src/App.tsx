import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
const App: React.FC = () => {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/products" element={<ProductsPage />}></Route>
					<Route path="/contact" element={<h1>contact</h1>}></Route>
				</Routes>
			</main>
		</div>
	);
};

export default App;
