import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BasicBreadcrumbs from "../../components/common/BasicBreadcrumbs";
import Filters from "../../features/Filters";
import Product from "../../components/product/Product";
import AccordionProduct from "../../components/product/Accordion ";
import Flexs from "../../components/layouts/Flexs";
import Grids from "../../components/layouts/Grids";
import { getProducts } from "../../api/products";
import products from "../../interfaces/products";
import { getCategories, getProductsByCategory } from "../../api/categories";

const ProductsPage: React.FC = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const [data, setData] = useState<products[]>([]);
	const [url, setUrl] = useState<Object | String>("");
	const [categories, setCategories] = useState<[]>([]);
	const navigate = useNavigate();
	const pa = useParams();
	const local = useLocation();

	useEffect(() => {
		navigate(url, { replace: true });
		getCategories().then(({ data }) => setCategories(data));
		console.log(local.pathname);
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

	return (
		<div>
			<BasicBreadcrumbs />
			<Filters categories={categories} setCategories={setUrl} toggle={toggle} onClick={setToggle} />
			<Flexs className="px-10 my-10">
				{!toggle && (
					<div className="w-[30%] transition-all">
						<AccordionProduct />
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
