import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/products";
import IProducts from "../../interfaces/products";
import Images from "../../components/overview/ImageList";
import Contents from "../../components/overview/Contents";
import Likes from "../../components/overview/Likes";
import { Typography } from "@mui/material";

const DetailPage: React.FC = () => {
	const { slugs } = useParams<string>();
	const [data, setData] = useState<IProducts | any>({});
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getProduct(slugs);
			setData(data[0]);
		};
		fetchData();
	}, [slugs]);

	return (
		<Box sx={{ flexGrow: 1, marginTop: 2 }} className="px-10">
			<Grid container spacing={2}>
				<Grid item xs={6} md={8}>
					{data && data?.albums?.length > 0 && (
						<Images albums={data?.albums} description={data.description} />
					)}
				</Grid>
				<Grid item xs={6} md={4} className="relative">
					{data && data?.options?.length > 0 && (
						<Contents
							title={data.title}
							price={data.price}
							saleoff={data.saleoff}
							options={data.options}
							_id={data._id}
							image={data.image}
							quantity={data.quantity}
						/>
					)}
				</Grid>
			</Grid>
			<Box sx={{ marginTop: 10 }}>
				<Typography
					variant="h6"
					sx={{
						textAlign: "center",
					}}
				>
					Recomments
				</Typography>
				<Likes slugs={slugs} />
			</Box>
		</Box>
	);
};

export default DetailPage;
