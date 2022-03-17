import React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import products from "../../interfaces/products";
import { Checkbox } from "@mui/material";

const Product: React.FC<products> = ({ title, price, image, slug, saleoff, albums }) => {
	return (
		<div className="group relative">
			<div className="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
				<div className="relative w-full h-full">
					<Link to={`/${slug}`}>
						<img
							src={`${image}`}
							alt="Front of men&#039;s Basic Tee in black."
							className="w-full h-full absolute object-center object-cover lg:w-full lg:h-full"
						/>
						<img
							src={albums[1].toString()}
							alt="Front of men&#039;s Basic Tee in black."
							className="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100"
						/>
					</Link>
				</div>
				<div className="flex absolute opacity-0 px-4 gap-2 right-4 cursor-pointer transition ease-in-out delay-250 bottom-20 z-10 group-hover:opacity-100 py-2 bg-white text-black hover:bg-black hover:text-white">
					<h4 className="font-bold border-r-2 pr-3">Add to Cart</h4>
					<AddShoppingCartOutlinedIcon />
				</div>
				<div className="italic absolute top-2 right-4 font-mono text-xl">
					{saleoff != 0 && `${saleoff}%`}
				</div>
				<span className="absolute top-2 left-4 font-mono text-black">
					<Checkbox color="default" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
				</span>
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-lg  text-gray-700">
						<Link to={`/${slug}`}>{title}</Link>
					</h3>
				</div>
				<p className="text-sm font-sans text-gray-900">{price.toLocaleString()}</p>
			</div>
		</div>
	);
};
export default Product;
