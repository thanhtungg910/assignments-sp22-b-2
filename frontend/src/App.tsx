import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import CategoriesManager from "./pages/admin/CategoriesManager";
import ProductsManager from "./pages/admin/ProductsManager";
import HomePage from "./pages/home/HomePage";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import DetailPage from "./pages/products/DetailPage";
import ProductsPage from "./pages/products/ProductsPage";
import EditProductPage from "./pages/admin/EditProductPage";
import CheckoutPage from "./pages/cart/Checkout";
import ShopCart from "./pages/cart/ShopCart";
import { getLocal } from "./utils/localstorage";
import WishListPage from "./pages/products/WishListPage";
import CustomersPage from "./pages/admin/CustomersPage";
import OrderListManager from "./pages/admin/OrderListManager";
import OverViewOrderPage from "./pages/admin/OverViewOrderPage";
import MyCart from "./pages/cart/MyCart";
const App: React.FC = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		const getLocation = () => {
			switch (pathname) {
				case "/":
					document.title = "Home";
					return;
				case "/products":
					document.title = "Products";
					return;
				case "/intro":
					document.title = "Intro";
					return;
				case "/orders":
					document.title = "Products";
					return;

				default:
					break;
			}
		};
		getLocation();
	}, [pathname]);

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
					<Route
						path="intro"
						element={
							<div className="min-h-screen">
								<h1>intro</h1>
							</div>
						}
					></Route>
					<Route path="wish-list" element={<WishListPage />}></Route>
					<Route path="my-cart" element={<MyCart />}></Route>

					<Route path="shop-cart">
						<Route index element={<ShopCart />}></Route>
						<Route path="checkout" element={<CheckoutPage />}></Route>
					</Route>
					<Route
						path="contact"
						element={
							<div className="min-h-screen">
								<h1>contact</h1>
							</div>
						}
					></Route>
				</Route>
				<Route path="/admin" element={<DashboardLayout />}>
					<Route index element={<Dashboard />}></Route>
					<Route path="categories" element={<CategoriesManager />}></Route>
					<Route path="products">
						<Route index element={<ProductsManager />} />
						<Route path="add" element={<AddProductPage />} />
						<Route path="edit/:slug" element={<EditProductPage />} />
					</Route>
					<Route path="orders">
						<Route index element={<OrderListManager />}></Route>
						<Route path=":id">
							<Route path=":author" element={<OverViewOrderPage />}></Route>
						</Route>
					</Route>
					<Route path="customers" element={<CustomersPage />}></Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
