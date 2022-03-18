import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled, { css } from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/products";
import products from "../../interfaces/products";
import {
	IconButton,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	RadioGroup,
	Rating,
	Typography,
} from "@mui/material";
const LabelStyled = styled.label`
	${(props) =>
		props.color
			? css`
					background-color: ${props.color};
			  `
			: ""}
`;

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}

const DetailPage: React.FC = () => {
	const { slug } = useParams();
	const [data, setData] = useState<products[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getProduct(slug);
			setData(data);
		};
		fetchData();
	}, [slug]);
	return (
		<Box sx={{ flexGrow: 1, marginTop: 2 }} className="px-10">
			<Grid container spacing={2}>
				<Grid item xs={6} md={8}>
					<ImageList gap={1}>
						{itemData.map((item) => {
							const cols = item.featured ? 2 : 1;
							const rows = item.featured ? 2 : 1;

							return (
								<ImageListItem key={item.img} cols={cols} rows={rows}>
									<img
										{...srcset(item.img, 250, 200, rows, cols)}
										alt={item.title}
										loading="lazy"
									/>
									<ImageListItemBar
										sx={{
											background:
												"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
												"rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
										}}
										title={item.title}
										position="top"
										actionIcon={
											<IconButton sx={{ color: "white" }} aria-label={`star ${item.title}`}>
												<StarBorderIcon />
											</IconButton>
										}
										actionPosition="left"
									/>
								</ImageListItem>
							);
						})}
					</ImageList>
				</Grid>
				<Grid item xs={6} md={4}>
					<h2>Tieu de</h2>
					<h3>100000D</h3>
					<Rating name="simple-controlled" />
					<Typography>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam perferendis nostrum
						eius quidem odio omnis laboriosam fugit, nemo cum excepturi quod, incidunt minus sequi,
						ipsum pariatur. Quas quasi consequuntur itaque.
					</Typography>
					<Box sx={{ borderTop: 1, marginTop: 2 }}>
						<Typography variant="subtitle1">Color</Typography>
						<div className="flex items-center space-x-3">
							<div className="relative">
								<input className="sr-only peer" type="radio" name="color" id="${color}" />
								<LabelStyled
									color="#017baa"
									className="flex h-8 w-8  border rounded-full border-gray-300  cursor-pointer focus:outline-none  peer-checked:ring-gray-400 peer-checked:ring-offset-1 peer-checked:ring-2  peer-checked:border-transparent"
									htmlFor="${color}"
								></LabelStyled>
							</div>
							<div className="relative">
								<input className="sr-only peer" type="radio" name="aa0164" id="aa0164" />
								<LabelStyled
									color="#aa0164"
									className="flex h-8 w-8  border rounded-full border-gray-300  cursor-pointer focus:outline-none  peer-checked:ring-gray-400 peer-checked:ring-offset-1 peer-checked:ring-2  peer-checked:border-transparent"
									htmlFor="aa0164"
								></LabelStyled>
							</div>
							<div className="relative">
								<input className="sr-only peer" type="radio" name="01aa21" id="01aa21" />
								<LabelStyled
									color="#01aa21"
									className="flex h-8 w-8  border rounded-full border-gray-300  cursor-pointer focus:outline-none  peer-checked:ring-gray-400 peer-checked:ring-offset-1 peer-checked:ring-2  peer-checked:border-transparent"
									htmlFor="01aa21"
								></LabelStyled>
							</div>
						</div>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
		author: "@bkristastucchio",
		featured: true,
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
		author: "@rollelflex_graphy726",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
		author: "@helloimnik",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
		author: "@nolanissac",
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
		author: "@hjrc33",
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
		author: "@arwinneil",
		featured: true,
	},
	{
		img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
		author: "@tjdragotta",
	},
	{
		img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
		title: "Fern",
		author: "@katie_wasserman",
	},
	{
		img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
		title: "Mushrooms",
		author: "@silverdalex",
	},
	{
		img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
		title: "Tomato basil",
		author: "@shelleypauls",
	},
	{
		img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
		title: "Sea star",
		author: "@peterlaster",
	},
	{
		img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
		title: "Bike",
		author: "@southside_customs",
	},
];
export default DetailPage;
