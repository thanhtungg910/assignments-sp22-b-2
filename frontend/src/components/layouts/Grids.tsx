import React from "react";

type Props = {
	className: String;
	children: any;
};

const Grids = (props: Props) => {
	return <div className={`grid grid-cols-4 gap-4 ${props.className}`}>{props.children}</div>;
};

export default Grids;
