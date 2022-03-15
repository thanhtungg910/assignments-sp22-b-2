import React from "react";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
type Props = {
	toggle: boolean;
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const Filters: React.FC<Props> = (props: Props) => {
	return (
		<div className="flex items-center justify-items-start border-2 px-10">
			<button
				onClick={() => props.onClick(!props.toggle)}
				className={`py-3 border-r-2 ${props.toggle ? "w-[12%]" : "w-[40%]"} transition-all`}
			>
				<span
					className={`float-left inline-block ${props.toggle && "hidden opacity-0"} transition-all`}
				>
					Hide Filters
				</span>
				<FilterAltOutlinedIcon className="float-right mr-2" />
			</button>
			<div className="font-bold py-3 w-[100%] px-5">1234</div>
			<form action="/" className="border-l-2 py-3 w-[30%] px-5 ">
				<label>Sort by</label>
				<select name="" id="">
					<option value="">sad</option>
					<option value="">sad</option>
				</select>
			</form>
		</div>
	);
};
export default Filters;
