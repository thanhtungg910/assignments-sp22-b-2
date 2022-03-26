import lodash from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BasicBreadcrumbs from "../../components/common/BasicBreadcrumbs";
import Filters from "../../features/Filters";
import Product from "../../components/product/Product";
import AccordionProduct from "../../components/product/Accordion ";
import Flexs from "../../components/layouts/Flexs";
import Grids from "../../components/layouts/Grids";
import { getProducts } from "../../api/products";
import IProducts from "../../interfaces/products";
import { getCategories, getProductsByCategory, searchProductsBySlug } from "../../api/categories";

const ProductsPage: React.FC = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const [data, setData] = useState<IProducts[]>([]);
	const [url, setUrl] = useState<any>("");
	const [query, setQuery] = useState<String>("");
	const [categories, setCategories] = useState<[]>([]);

	const navigate = useNavigate();
	const local = useLocation();

	useEffect(() => {
		navigate(url, { replace: true });
		getCategories().then(({ data }) => setCategories(data));
		if (url == "/products" || local.pathname == "/products") {
			const getproducts = async () => {
				const { data } = await getProducts();
				setData(data);
			};
			getproducts();
		} else {
			const path = url || local.pathname;
			const getproducts = async () => {
				const {
					data: { products },
				} = await getProductsByCategory(path);
				setData(products);
			};
			getproducts();
		}
		return () => setUrl("");
	}, [url]);
	const debounceFn = useCallback(
		lodash.debounce(async function handleDebounceFn(text) {
			const path = url || local.pathname;
			const { data } = await searchProductsBySlug(path, text);
			setData(data);
		}, 1000),
		[]
	);
	return (
		<div>
			<BasicBreadcrumbs />
			<Filters
				categories={categories}
				setCategories={setUrl}
				toggle={toggle}
				onClick={setToggle}
				pathname={local.pathname}
			/>
			<Flexs className="px-10 my-10">
				{!toggle && (
					<div className="w-[30%] transition-all">
						<AccordionProduct query={query} setQuery={setQuery} debounceFn={debounceFn} />
					</div>
				)}
				<Grids className="col-span-2 w-full">
					{data &&
						data.length > 0 &&
						data.map((item, index) => (
							<Product
								key={index}
								title={item.title}
								price={item.price}
								saleoff={item.saleoff}
								options={item.options}
								image={item.image}
								albums={item.albums}
								slug={item.slug}
							/>
						))}
				</Grids>
			</Flexs>
		</div>
	);
};

export default ProductsPage;
