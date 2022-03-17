import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Dashboard from "./pages/layouts/Dashboard";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import ProductsPage from "./pages/products/ProductsPage";
const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<WebsiteLayout />}>
					<Route index element={<HomePage />}></Route>
					<Route path="products" element={<ProductsPage />}></Route>
					<Route path="intro" element={<h1>intro</h1>}></Route>
					<Route path="contact" element={<h1>contact</h1>}></Route>
				</Route>
				<Route path="/admin" element={<Dashboard />}>
					<Route index element={<h1>admin</h1>}></Route>
					<Route path="products" element={<h1>contact</h1>}></Route>
					<Route path="contact" element={<h1>contact</h1>}></Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
