import React from "react";

type Props = {
	className?: String;
	children?: any;
};

const Flexs = (props: Props) => {
	return <div className={`flex gap-4 ${props.className}`}>{props.children}</div>;
};

export default Flexs;
