import { Button } from "@mui/material";
import React, { SelectHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { ICart } from "../../interfaces/products";
type IShop = {
	products: ICart[];
	handleIncrease?: (id: String) => void;
	handleDecrease?: (id: String) => void;
	handleChangeQty?:
		| SelectHTMLAttributes<HTMLSelectElement>
		| any
		| React.SelectHTMLAttributes<HTMLSelectElement>;
};
const Shopping: React.FC<IShop> = ({ products, handleChangeQty }: IShop) => {
	return (
		<div className="max-w-md mx-auto rounded-lg md:max-w-5xl border">
			<div className="w-full p-4 px-5 py-5">
				<div className="md:grid  gap-2 ">
					<div className="col-span-2 p-5">
						<h1 className="text-xl font-medium ">Shopping Cart</h1>
						{products &&
							products.length > 0 &&
							products.map((item, index: React.Key) => (
								<div key={index} className="flex justify-between items-center pt-6 mt-6 border-t">
									<div className="flex items-center">
										{" "}
										<img srcSet={`${item.image}`} width={60} className="rounded-sm " />
										<div className="flex flex-col ml-3 ">
											{" "}
											<span className="text-md font-medium w-auto">{item.title}</span>{" "}
											<span className="text-xs font-light text-gray-400">Color: #{item.color}</span>{" "}
											<span className="text-xs font-light text-gray-400">Size: {item.size}</span>{" "}
										</div>
									</div>
									<div className="flex justify-center items-center">
										<div className="pr-8 flex">
											<select value={item.quantity} onChange={handleChangeQty} data-id={item._id}>
												{Array(10)
													.fill(item._id)
													.map((item, index) => (
														<option key={index} value={index + 1}>
															{index + 1}
														</option>
													))}
											</select>
										</div>
										<div className="pr-8">
											{" "}
											<span className="text-xs font-medium">
												{(item.price * item.quantity).toLocaleString()}
											</span>{" "}
										</div>
										<div>
											{" "}
											<i className="fa fa-close text-xs font-medium" />{" "}
										</div>
									</div>
								</div>
							))}
						<div className="flex justify-between items-center mt-6 pt-6 border-t">
							<div className="flex items-center">
								{" "}
								<i className="fa fa-arrow-left text-sm pr-2" />{" "}
								<Button color="primary" sx={{ marginTop: 2 }} component={Link} to="/products">
									Continue Shopping
								</Button>
							</div>
							<div>
								<div className="flex justify-center items-end">
									<span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>{" "}
									<span className="text-lg font-bold text-gray-800 ">
										{" "}
										{products &&
											products.length > 0 &&
											products
												.reduce((current, { quantity, price }) => current + price * quantity, 0)
												.toLocaleString()}
									</span>{" "}
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
	);
};

export default Shopping;
