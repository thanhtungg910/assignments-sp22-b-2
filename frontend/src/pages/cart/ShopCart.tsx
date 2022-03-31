import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const ShopCart = (props: Props) => {
	return (
		<div className="py-12">
			<div className="max-w-md mx-auto rounded-lg md:max-w-5xl border">
				<div className="w-full p-4 px-5 py-5">
					<div className="md:grid  gap-2 ">
						<div className="col-span-2 p-5">
							<h1 className="text-xl font-medium ">Shopping Cart</h1>
							<div className="flex justify-between items-center mt-6 pt-6">
								<div className="flex items-center">
									{" "}
									<img src="https://i.imgur.com/EEguU02.jpg" width={60} className="rounded-full " />
									<div className="flex flex-col ml-3">
										{" "}
										<span className="md:text-md font-medium">Chicken momo</span>{" "}
										<span className="text-xs font-light text-gray-400">#41551</span>{" "}
									</div>
								</div>
								<div className="flex justify-center items-center">
									<div className="pr-8 flex ">
										{" "}
										<span className="font-semibold">-</span>{" "}
										<input
											type="text"
											className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
											defaultValue={1}
										/>{" "}
										<span className="font-semibold">+</span>{" "}
									</div>
									<div className="pr-8 ">
										{" "}
										<span className="text-xs font-medium">$10.50</span>{" "}
									</div>
									<div>
										{" "}
										<i className="fa fa-close text-xs font-medium" />{" "}
									</div>
								</div>
							</div>
							<div className="flex justify-between items-center pt-6 mt-6 border-t">
								<div className="flex items-center">
									{" "}
									<img src="https://i.imgur.com/Uv2Yqzo.jpg" width={60} className="rounded-full " />
									<div className="flex flex-col ml-3 ">
										{" "}
										<span className="text-md font-medium w-auto">Spicy Mexican potatoes</span>{" "}
										<span className="text-xs font-light text-gray-400">#66999</span>{" "}
									</div>
								</div>
								<div className="flex justify-center items-center">
									<div className="pr-8 flex">
										{" "}
										<span className="font-semibold">-</span>{" "}
										<input
											type="text"
											className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
											defaultValue={1}
										/>{" "}
										<span className="font-semibold">+</span>{" "}
									</div>
									<div className="pr-8">
										{" "}
										<span className="text-xs font-medium">$10.50</span>{" "}
									</div>
									<div>
										{" "}
										<i className="fa fa-close text-xs font-medium" />{" "}
									</div>
								</div>
							</div>
							<div className="flex justify-between items-center mt-6 pt-6 border-t">
								<div className="flex items-center">
									{" "}
									<img src="https://i.imgur.com/xbTAITF.jpg" width={60} className="rounded-full " />
									<div className="flex flex-col ml-3 ">
										{" "}
										<span className="text-md font-medium">Breakfast</span>{" "}
										<span className="text-xs font-light text-gray-400">#86577</span>{" "}
									</div>
								</div>
								<div className="flex justify-center items-center">
									<div className="pr-8 flex">
										{" "}
										<span className="font-semibold">-</span>{" "}
										<input
											type="text"
											className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
											defaultValue={1}
										/>{" "}
										<span className="font-semibold">+</span>{" "}
									</div>
									<div className="pr-8">
										{" "}
										<span className="text-xs font-medium">$10.50</span>{" "}
									</div>
									<div>
										{" "}
										<i className="fa fa-close text-xs font-medium" />{" "}
									</div>
								</div>
							</div>
							<div className="flex justify-between items-center mt-6 pt-6 border-t">
								<div className="flex items-center">
									{" "}
									<i className="fa fa-arrow-left text-sm pr-2" />{" "}
									<span className="text-md font-medium text-blue-500">Continue Shopping</span>{" "}
								</div>
								<div>
									<div className="flex justify-center items-end">
										<span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>{" "}
										<span className="text-lg font-bold text-gray-800 "> $24.90</span>{" "}
									</div>
									<Button
										variant="contained"
										color="primary"
										sx={{ marginTop: 2 }}
										component={Link}
										to="checkout"
									>
										Checkout
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopCart;
