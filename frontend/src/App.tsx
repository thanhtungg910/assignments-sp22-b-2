import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import CategoriesManager from "./pages/admin/CategoriesManager";
import ProductsManager from "./pages/admin/ProductsManager";
import HomePage from "./pages/home/HomePage";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import DetailPage from "./pages/products/DetailPage";
import ProductsPage from "./pages/products/ProductsPage";
const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<WebsiteLayout />}>
					<Route index element={<HomePage />}></Route>
					<Route path="products">
						<Route index element={<ProductsPage />}></Route>
						<Route path=":slugs" element={<DetailPage />}></Route>
					</Route>
					<Route path="categories/:slug">
						<Route index element={<ProductsPage />}></Route>
						<Route path=":slugs" element={<DetailPage />}></Route>
					</Route>
					<Route path="intro" element={<h1>intro</h1>}></Route>
					<Route path="contact" element={<h1>contact</h1>}></Route>
				</Route>
				<Route path="/admin" element={<DashboardLayout />}>
					<Route index element={<Dashboard />}></Route>
					<Route path="categories" element={<CategoriesManager />}></Route>
					<Route path="products">
						<Route index element={<ProductsManager />} />
						<Route path="add" element={<AddProductPage />} />
					</Route>
					<Route path="orders" element={<h1>orders</h1>}></Route>
					<Route path="customers" element={<h1>customers</h1>}></Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
