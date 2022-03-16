import React, { useState } from "react";
import BasicBreadcrumbs from "../../components/common/BasicBreadcrumbs";
import Filters from "../../features/Filters";
import Product from "../../components/product/Product";
import AccordionProduct from "../../components/product/Accordion ";
import Flexs from "../../components/layouts/Flexs";
import Grids from "../../components/layouts/Grids";
type Props = {};
const ProductsPage: React.FC = (props: Props) => {
	const [toggle, setToggle] = useState<boolean>(false);
	return (
		<div>
			<BasicBreadcrumbs />

			<Filters toggle={toggle} onClick={setToggle} />

			<Flexs className="px-10 my-10">
				{!toggle && (
					<div className="w-[30%] transition-all">
						<AccordionProduct />
					</div>
				)}
				<Grids className="col-span-2 w-full">
					<Product />
				</Grids>
			</Flexs>
		</div>
	);
};

export default ProductsPage;
/* 
<div className="flex gap-4 px-10 my-10">
				{!toggle && (
					<div className="w-[30%] transition-all">
						<AccordionProduct />
					</div>
				)}
				<div className="col-span-2 grid grid-cols-4 gap-4 w-full">
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div> */
