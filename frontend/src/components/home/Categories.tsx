import React from "react";
import { Link } from "react-router-dom";
import { CategoryStyled } from "./CategoriesStyled";

type Props = {};

const Categories: React.FC = (props: Props) => {
	return (
		<CategoryStyled>
			<Link to="/">
				<img
					src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dwb6ddc1ce/firstspirit/media/homepage_1/2022_spring/03_03/D-CONVERSE-NA-03-03-22-SHOP-BY-STYLE-1.jpg"
					alt=""
				/>
			</Link>
			<div className="category--overlay">
				<h2 className="m-2">Tieu de</h2>
			</div>
		</CategoryStyled>
	);
};

export default Categories;
