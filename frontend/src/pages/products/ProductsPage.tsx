import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/common/BasicBreadcrumbs";
import Filters from "../../features/Filters";
import Product from "../../components/product/Product";
import AccordionProduct from "../../components/product/Accordion ";
import Flexs from "../../components/layouts/Flexs";
import Grids from "../../components/layouts/Grids";
import { getProducts } from "../../api/products";
import products from "../../interfaces/products";
import { getCategories } from "../../api/categories";

const ProductsPage: React.FC = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const [data, setData] = useState<products[]>([]);
	const [checked, setChecked] = useState<{}>({});
	const [categories, setCategories] = useState<[]>([]);
	useEffect(() => {
		const getproducts = async () => {
			const [products, categories] = await Promise.all([getProducts(), getCategories()]);
			setData(products.data);
			setCategories(categories.data);
		};
		getproducts();
	}, []);
	console.log(checked);

	return (
		<div>
			<BasicBreadcrumbs />
			<Filters toggle={toggle} onClick={setToggle} />
			<Flexs className="px-10 my-10">
				{!toggle && (
					<div className="w-[30%] transition-all">
						<AccordionProduct
							categories={categories}
							setCategories={setChecked}
							checked={checked}
						/>
					</div>
				)}
				<Grids className="col-span-2 w-full">
					{data.length > 0 &&
						data.map((item, index) => (
							<Product
								key={index}
								title={item.title}
								price={item.price}
								saleoff={item.saleoff}
								options={item.options}
								image={item.image}
								slug={item.slug}
							/>
						))}
				</Grids>
			</Flexs>
		</div>
	);
};

export default ProductsPage;
