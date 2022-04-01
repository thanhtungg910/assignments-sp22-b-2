import lodash, { includes } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Alert, Pagination, PaginationItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BasicBreadcrumbs from "../../components/common/BasicBreadcrumbs";
import Filters from "../../features/Filters";
import Product from "../../components/product/Product";
import AccordionProduct from "../../components/product/Accordion ";
import Flexs from "../../components/layouts/Flexs";
import Grids from "../../components/layouts/Grids";
import { getProducts, searchProductByPrice } from "../../api/products";
import IProducts from "../../interfaces/products";
import { getCategories, getProductsByCategory, searchProductsBySlug } from "../../api/categories";
import { Box } from "@mui/system";
import useQuery from "../../hooks/useQuery";
import { Link } from "react-router-dom";

const ProductsPage: React.FC = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const [data, setData] = useState<IProducts[]>([]);
	const [categories, setCategories] = useState<[]>([]);
	const [total, setTotal] = useState<Number | number>(0);
	const [search, textSearch] = useState(null);
	const [price, setPrice] = React.useState<number[]>([0, 9000000]);
	const [options, setOptions] = useState<{ color: String[]; size: String[] } | any>({
		color: [],
		size: [],
	});

	const navigate = useNavigate();
	const local = useLocation();
	const path = local.pathname;
	const quer = useQuery();
	const page = quer.get("page") || 0;
	const order: string = quer.get("order") || "DESC";
	useEffect(() => {
		getCategories().then(({ data }) => setCategories(data));
		if (!local.pathname) return;
		const fetchproducts = async () => {
			const {
				data: { products, countDoc },
			} = await getProducts(+page, 8, order);
			setTotal(countDoc);
			setData(products);
			return;
		};
		fetchproducts();
		if (search && search != null) {
			const handleSearch = async () => {
				const path = local.pathname;
				const {
					data: { products, countDoc },
				} = await searchProductsBySlug(path, search, +page, 8);
				setTotal(countDoc);
				setData(products);
				return;
			};
			handleSearch();
			return;
		}
		if (path != "/products") {
			const getProductsByCate = async () => {
				const {
					data: { products, countDoc },
				} = await getProductsByCategory(path, +page);
				setTotal(countDoc);
				setData(products);
			};
			getProductsByCate();
			return;
		}
	}, [local, search]);

	const handleChangeUrl = (e: string) => {
		navigate(e);
	};
	useEffect(() => {
		if (!price) return;
		const search = () => {
			// const filterData = data.filter((item) => {
			// 	console.log(price[1], item.price);
			// 	return item.price <= price[1] && item.price >= price[0];
			// });
			// console.log(filterData);
			// const res = await searchProductByPrice(price);
		};
		search();
	}, [price]);

	const debounceFn = useCallback(
		lodash.debounce(async function handleDebounceFn(text) {
			textSearch(text);
		}, 1000),
		[]
	);

	const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
		let color: any | String[];
		if (event.target.checked) {
			color = [...options.color, event.target.value];
		} else {
			color = [...options.color].filter((cl) => cl != event.target.value);
		}
		setOptions({
			color: [...color],
			size: [...options.size],
		});
	};

	return (
		<div>
			<BasicBreadcrumbs />
			<Filters
				categories={categories}
				setCategories={handleChangeUrl}
				toggle={toggle}
				onClick={setToggle}
				pathname={local.pathname}
				total={total}
				options={options}
			/>
			<Flexs className="px-10 my-10">
				{!toggle && (
					<div className="w-[30%] transition-all">
						<AccordionProduct
							// query={query}
							// setQuery={setQuery}
							handleChecked={handleChecked}
							debounceFn={debounceFn}
							price={price}
							setPrice={setPrice}
						/>
					</div>
				)}
				<Box className="w-full">
					{total == 0 && <Alert severity="warning">No products you are looking for!</Alert>}
					<Grids className="col-span-2 ">
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
									_id={item._id}
								/>
							))}
					</Grids>
					{total != 0 && (
						<Stack
							spacing={2}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								marginTop: 2,
							}}
						>
							<Pagination
								count={Math.ceil(+total / 8)}
								page={+page}
								renderItem={(item) => (
									<PaginationItem
										components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
										component={Link}
										to={`${item.page === 1 ? "" : `?page=${item.page}`}`}
										{...item}
									/>
								)}
							/>
						</Stack>
					)}
				</Box>
			</Flexs>
		</div>
	);
};

export default ProductsPage;
