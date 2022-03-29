import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Link } from "react-router-dom";
import Banner from "../../components/common/Banner";
import Categories from "../../components/home/Categories";
import Likes from "../../components/overview/Likes";

const HomePage: React.FC = () => {
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
				<div className="grid grid-cols-4">
					{Array(4)
						.fill(null)
						.map((item, index) => (
							<Categories key={index} />
						))}
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
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
									commodo posuere et sit amet ligula.
									<br />
									<br />
									Images from:
									<a className="text-pink-500 underline" href="https://undraw.co/">
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
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu
										nunc commodo posuere et sit amet ligula.
										<br />
										<br />
										Images from:
										<a className="text-pink-500 underline" href="https://undraw.co/">
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
		</div>
	);
};

export default HomePage;
