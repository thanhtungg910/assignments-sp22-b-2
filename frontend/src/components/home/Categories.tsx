import React from "react";
import { Link } from "react-router-dom";
import { CategoryStyled } from "./CategoriesStyled";

type Props = { img?: string; slug: String; title: string };

const Categories: React.FC<Props> = ({ img, slug, title }: Props) => {
	return (
		<CategoryStyled>
			<Link to={`/products/${slug}`}>
				<img srcSet={img} alt={title} className="w-full h-full object-cover" />
				<div className="category--overlay">
					<h2 className="m-2">{title}</h2>
				</div>
			</Link>
		</CategoryStyled>
	);
};

export default Categories;
