import React from "react";
import Box from "@mui/material/Box";
import styled, { css } from "styled-components";
import { Button, Rating, Typography } from "@mui/material";
const LabelStyled = styled.label`
	${(props) =>
		props.color
			? css`
					background-color: ${props.color};
			  `
			: ""}
`;
type Props = {};

const Contents: React.FC = (props: Props) => {
	return (
		<Box className="sticky top-32">
			<Typography variant="h3">Tieu de</Typography>
			<Typography variant="h6">100000D</Typography>
			<Rating name="simple-controlled" />
			<Typography>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam perferendis nostrum eius
				quidem odio omnis laboriosam fugit, nemo cum excepturi quod, incidunt minus sequi, ipsum
				pariatur. Quas quasi consequuntur itaque.
			</Typography>
			<Box sx={{ borderTop: 1, marginTop: 2, padding: 4 }}>
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
			<Box sx={{ borderTop: 1, marginTop: 2, padding: 4 }}>
				<Typography variant="subtitle1">Size</Typography>
				<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
					<div className="relative">
						<input className="sr-only peer" type="radio" value="${size}" name="size" id="${size}" />
						<label
							className="flex py-3 px-4 border rounded-md items-center 
		justify-center text-sm font-medium uppercase bg-white shadow-sm text-gray-900 border-gray-300  cursor-pointer focus:outline-none  peer-checked:ring-gray-400 peer-checked:ring-offset-3 peer-checked:ring-2  peer-checked:border-transparent"
							htmlFor="${size}"
						>
							12
						</label>
					</div>
				</div>
			</Box>
			<Button
				sx={{
					padding: 3,
					width: "100%",
					background: "black",
				}}
				variant="contained"
			>
				Add to Cart
			</Button>
		</Box>
	);
};

export default Contents;