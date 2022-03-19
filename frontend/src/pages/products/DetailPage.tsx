import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/products";
import products from "../../interfaces/products";
import Images from "../../components/overview/ImageList";
import Contents from "../../components/overview/Contents";
import Likes from "../../components/overview/Likes";

const DetailPage: React.FC = () => {
	const { slugs } = useParams<string>();
	const [data, setData] = useState<products[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getProduct(slugs);
			setData(data);
		};
		fetchData();
	}, [slugs]);
	return (
		<Box sx={{ flexGrow: 1, marginTop: 2 }} className="px-10">
			<Grid container spacing={2}>
				<Grid item xs={6} md={8}>
					<Images />
				</Grid>
				<Grid item xs={6} md={4} className="relative">
					<Contents />
				</Grid>
			</Grid>
			<Likes />
		</Box>
	);
};

export default DetailPage;
