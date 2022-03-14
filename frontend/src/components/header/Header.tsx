import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Navigation from "../navigation/Navigation";

const Header: React.FC = () => {
	const [show, setShow] = useState<boolean>(false);
	const handleShow: () => void = () => {
		setShow(!show);
	};
	return (
		<div>
			<AddIcon onClick={handleShow} className="cursor-pointer" />
			<Navigation show={show} onClick={handleShow}></Navigation>
		</div>
	);
};

export default Header;
