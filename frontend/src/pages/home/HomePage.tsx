import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Link } from "react-router-dom";
import Banner from "../../components/common/Banner";
import Categories from "../../components/home/Categories";

const HomePage: React.FC = () => {
	return (
		<div className="mt-5">
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
						.map((item) => (
							<Categories />
						))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
