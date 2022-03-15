import React from "react";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
const PromoBanner: React.FC = () => {
	return (
		<div className="w-full min-h-[3.125rem] bg-[#e5e5e5] text-[#000] border-b-2 flex items-center justify-center">
			<div className="flex justify-center gap-x-40">
				<ArrowBackOutlinedIcon className="cursor-pointer" />
				<Link to="/">
					<span className="font-bold font-mono">30-DAY FREE RETURNS!</span>
					<span>&nbsp;</span>
				</Link>
				<ArrowForwardOutlinedIcon className="cursor-pointer" />
			</div>
		</div>
	);
};

export default PromoBanner;
