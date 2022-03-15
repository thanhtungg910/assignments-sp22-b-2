import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BasicBreadcrumbs from "../../components/common/BasicBreadcrumbs";

import Filters from "../../features/Filters";
import RecipeReviewCard from "../../components/product/Products";
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
			<div className="grid grid-cols-3 gap-4">
				<div>1</div>
				<div className="col-span-2">2</div>
			</div>
		</div>
	);
};

export default ProductsPage;
