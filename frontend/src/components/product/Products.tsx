import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Button, Chip } from "@mui/material";

const RecipeReviewCard: React.FC = () => {
	return (
		<div className="group relative">
			<div className="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
				<div className="relative w-full h-full">
					<Link to="/">
						<img
							src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw854ef31f/images/a_107/A01730C_A_107X1.jpg?sw=964"
							alt="Front of men&#039;s Basic Tee in black."
							className="w-full h-full absolute object-center object-cover lg:w-full lg:h-full"
						/>
						<img
							src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dweca8e99e/images/h_08/A01730C_H_08X1.jpg?sw=406"
							alt="Front of men&#039;s Basic Tee in black."
							className="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100"
						/>
					</Link>
				</div>
				<div className="flex   absolute opacity-0 px-4 gap-2 right-4 cursor-pointer transition ease-in-out delay-250 bottom-20 z-10 group-hover:opacity-100 py-2 bg-white text-black hover:bg-black hover:text-white">
					<h4 className="font-bold border-r-2 pr-3">Add to Cart</h4>
					<AddShoppingCartOutlinedIcon />
				</div>
				<div className="italic absolute top-2 right-4 font-mono text-xl">0%</div>
				<Chip
					icon={
						<FavoriteBorderOutlinedIcon className="absolute top-2 left-4 font-mono text-black" />
					}
				></Chip>
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">
						<Link to="/">Tieu de</Link>
					</h3>
					<p className="mt-1 text-sm text-gray-500">color</p>
				</div>
				<p className="text-sm font-sans text-gray-900">123213</p>
			</div>
		</div>
	);
};
export default RecipeReviewCard;
