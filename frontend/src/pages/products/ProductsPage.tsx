import React, { useState } from "react";
import BasicBreadcrumbs from "../../components/common/BasicBreadcrumbs";
import Filters from "../../features/Filters";
import RecipeReviewCard from "../../components/product/Products";
import AccordionProduct from "../../components/product/Accordion ";
type Props = {};
const ProductsPage: React.FC = (props: Props) => {
	const [toggle, setToggle] = useState<boolean>(false);
	return (
		<div>
			<BasicBreadcrumbs />
			{/*
			 * Fitters
			 */}
			<Filters toggle={toggle} onClick={setToggle} />
			<div className="flex gap-4 px-10 my-10">
				{!toggle && (
					<div className="w-[30%] transition-all">
						<AccordionProduct />
					</div>
				)}
				<div className="col-span-2 grid grid-cols-4 gap-4 w-full">
					<RecipeReviewCard />
					<RecipeReviewCard />
					<RecipeReviewCard />
					<RecipeReviewCard />
					<RecipeReviewCard />
					<RecipeReviewCard />
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
