import React, { useState } from "react";
import BasicBreadcrumbs from "../../components/common/BasicBreadcrumbs";
import Filters from "../../features/Filters";
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
		</div>
	);
};

export default ProductsPage;
