import React, { useEffect, useState } from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaidIcon from "@mui/icons-material/Paid";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Banner from "../../components/common/Banner";
import Categories from "../../components/home/Categories";
import Likes from "../../components/overview/Likes";
import SwiperRatio from "../../components/home/SwiperRatio";
import { getProducts } from "../../api/products";
import Pricing from "../../components/home/Pricing";

const HomePage: React.FC = () => {
	const [data, setData] = useState<[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const {
				data: { products },
			} = await getProducts(0, 6);
			setData(products);
		};
		fetchData();
	}, []);

	return (
		<div className="mt-5 min-h-screen p-2 px-10">
			<Banner></Banner>
			<div className="mt-4">
				<div className="py-9">
					<div className="text-4xl font-bold">Shop by style</div>
					<Link to="/">
						<ArrowForwardOutlinedIcon /> Shop all
					</Link>
				</div>
				<div>
					<SwiperRatio>
						{data &&
							data.length > 0 &&
							data.map(
								(
									item: { slug: string; title: string; image: string },
									index
								) => (
									<SwiperSlide>
										<Categories
											key={index}
											slug={item.slug}
											title={item.title}
											img={item.image}
										/>
									</SwiperSlide>
								)
							)}
					</SwiperRatio>
				</div>
				<section className="bg-white border-b">
					<div className="container mx-auto m-8">
						<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
							Hot
						</h1>
						<div className="w-full mb-4">
							<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
						</div>
						<div className="flex flex-wrap">
							<div className="w-5/6 sm:w-1/2 p-6">
								<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
									Lorem ipsum dolor sit amet
								</h3>
								<p className="text-gray-600 mb-8">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
									<br />
									<br />
									Images from:
									<a
										className="text-pink-500 underline"
										href="https://undraw.co/"
									>
										undraw.co
									</a>
								</p>
							</div>
							<div className="w-full sm:w-1/2 p-6">
								<img src="https://picsum.photos/1000/1000" />
							</div>
						</div>
						<div className="flex flex-wrap flex-col-reverse sm:flex-row">
							<div className="w-full sm:w-1/2 p-6 mt-6">
								<img src="https://picsum.photos/1000/1000" />
							</div>
							<div className="w-full sm:w-1/2 p-6 mt-6">
								<div className="align-middle">
									<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
										Lorem ipsum dolor sit amet
									</h3>
									<p className="text-gray-600 mb-8">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
										<br />
										<br />
										Images from:
										<a
											className="text-pink-500 underline"
											href="https://undraw.co/"
										>
											undraw.co
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Likes />
			<div className="container px-6 py-8 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
					<Pricing
						icon={<LocalShippingIcon fontSize="large" />}
						title="Ship free"
					>
						<ul className="flex-1 space-y-4">
							<li className="text-gray-500 dark:text-gray-400">
								Up to 5 projects
							</li>
							<li className="text-gray-500 dark:text-gray-400">
								Up to 10 collaborators
							</li>
							<li className="text-gray-500 dark:text-gray-400">
								2Gb of storage
							</li>
						</ul>
					</Pricing>
					<Pricing icon={<PaidIcon fontSize="large" />} title="Payment">
						<ul className="flex-1 space-y-4">
							<li className="text-gray-500 dark:text-gray-400">
								Up to 5 projects
							</li>
							<li className="text-gray-500 dark:text-gray-400">
								Up to 10 collaborators
							</li>
							<li className="text-gray-500 dark:text-gray-400">
								2Gb of storage
							</li>
						</ul>
					</Pricing>
					<Pricing icon={<RocketLaunchIcon fontSize="large" />} title="Flash">
						<ul className="flex-1 space-y-4">
							<li className="text-gray-500 dark:text-gray-400">
								Up to 5 projects
							</li>
							<li className="text-gray-500 dark:text-gray-400">
								Up to 10 collaborators
							</li>
							<li className="text-gray-500 dark:text-gray-400">
								2Gb of storage
							</li>
						</ul>
					</Pricing>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
