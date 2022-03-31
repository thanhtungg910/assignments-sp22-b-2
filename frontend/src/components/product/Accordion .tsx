import * as React from "react";
import Accordion from "@mui/material/Accordion";
import TextField from "@mui/material/TextField";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, Slider } from "@mui/material";
import styled, { css } from "styled-components";
import axios from "axios";

const LabelStyled = styled.label`
	${(props) =>
		props.color
			? css`
					background-color: ${props.color};
			  `
			: ""}
`;
type IAccor = {
	query?: String;
	setQuery?: React.Dispatch<React.SetStateAction<String>>;
	debounceFn: (inputValue: any) => void;
	price: number[];
	setPrice: React.Dispatch<React.SetStateAction<number[]>>;
};

const AccordionProduct: React.FC<IAccor> = ({ query, setQuery, debounceFn, price, setPrice }) => {
	const [expanded, setExpanded] = React.useState<boolean>(true);
	const [colorList, setColorList] = React.useState<[]>([]);
	const sizeList = ["S", "M", "L", "XL", "XXL"];
	React.useEffect(() => {
		axios
			.get("http://localhost:5001/api/colors")
			.then(({ data }) => setColorList(data))
			.catch((err: any) => console.log(err));
	}, []);

	const handleOnchange = (event: { target: { value: string } }) => {
		// setQuery(event.target.value);
		debounceFn(event.target.value);
	};

	const handleChange = (event: Event, newValue: number | number[]) => {
		setPrice(newValue as number[]);
	};
	return (
		<div>
			<Accordion expanded={expanded}>
				<AccordionSummary onClick={() => setExpanded(!expanded)} expandIcon={<ExpandMoreIcon />}>
					<Typography>Search</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormControl fullWidth>
						<TextField
							onChange={handleOnchange}
							label="Search"
							// value={query}
							sx={{ marginBottom: 2 }}
						></TextField>
						<Typography gutterBottom>
							Price: {price[0]}$ -- {price[1]}$
						</Typography>

						<Slider
							getAriaLabel={() => "Temperature range"}
							value={price}
							onChange={handleChange}
							valueLabelDisplay="auto"
							color="primary"
						/>
					</FormControl>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>Color</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<ul className="flex gap-5 max-w-md mx-auto flex-wrap">
						{colorList &&
							colorList.length > 0 &&
							colorList.map((color: any, index: React.Key) => (
								<li className="relative" key={index}>
									<input
										className="sr-only peer"
										type="checkbox"
										value="yes"
										id={`#${color.hexCode}`}
									/>
									<LabelStyled
										color={`#${color.hexCode}`}
										className="flex w-8 h-8 border rounded-full border-gray-300 cursor-pointer focus:outline-none peer-checked:ring-gray-400 peer-checked:ring-offset-1 peer-checked:ring-2  peer-checked:border-transparent"
										htmlFor={`#${color.hexCode}`}
									></LabelStyled>
									<div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3"></div>
								</li>
							))}
					</ul>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>Size</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
						{sizeList.length > 0 &&
							sizeList.map((size: String, index: React.Key) => (
								<div className="relative" key={index}>
									<input
										className="sr-only peer"
										type="checkbox"
										value={`${size}`}
										name="size"
										id={`${size}`}
									/>
									<label
										className="flex py-3 px-4 border rounded-md items-center 
		justify-center text-sm font-medium uppercase bg-white shadow-sm text-gray-900 border-gray-300  cursor-pointer focus:outline-none  peer-checked:ring-gray-400 peer-checked:ring-offset-3 peer-checked:ring-2  peer-checked:border-transparent"
										htmlFor={`${size}`}
									>
										{size}
									</label>
								</div>
							))}
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
export default AccordionProduct;
