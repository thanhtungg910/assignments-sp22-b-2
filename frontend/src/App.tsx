import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
const App: React.FC = () => {
	return (
		<div>
			<Header />
			<main className="min-h-screen p-2 px-10">
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/products" element={<h1>products</h1>}></Route>
					<Route path="/contact" element={<h1>contact</h1>}></Route>
				</Routes>
			</main>
		</div>
	);
};

export default App;
