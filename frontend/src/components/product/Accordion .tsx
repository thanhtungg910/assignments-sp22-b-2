import * as React from "react";
import Accordion from "@mui/material/Accordion";
import TextField from "@mui/material/TextField";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, Slider } from "@mui/material";
import styled, { css } from "styled-components";

const LabelStyled = styled.label`
	${(props) =>
		props.color
			? css`
					background-color: ${props.color};
			  `
			: ""}
`;
type IAccor = {
	query: String;
	setQuery: React.Dispatch<React.SetStateAction<String>>;
	debounceFn: (inputValue: any) => void;
	price: number[];
	setPrice: React.Dispatch<React.SetStateAction<number[]>>;
};

const AccordionProduct: React.FC<IAccor> = ({ query, setQuery, debounceFn, price, setPrice }) => {
	const [expanded, setExpanded] = React.useState<boolean>(true);
	const handleOnchange = (event: { target: { value: string } }) => {
		setQuery(event.target.value);
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
							value={query}
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
					<ul className="flex gap-x-5 max-w-md mx-auto">
						<li className="relative">
							<input className="sr-only peer" type="checkbox" value="yes" id="answer_yes" />
							<LabelStyled
								color="#ccc"
								className="flex w-8 h-8 border rounded-full border-gray-300 cursor-pointer focus:outline-none peer-checked:ring-gray-400 peer-checked:ring-offset-1 peer-checked:ring-2  peer-checked:border-transparent"
								htmlFor="answer_yes"
							></LabelStyled>
							<div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3"></div>
						</li>

						<li className="relative">
							<input className="sr-only peer" type="checkbox" value="maybe" id="answer_maybe" />
							<LabelStyled
								color="#000"
								className="flex w-8 h-8 border rounded-full border-gray-300 cursor-pointer focus:outline-none peer-checked:ring-gray-400 peer-checked:ring-offset-1 peer-checked:ring-2 peer-checked:border-transparent"
								htmlFor="answer_maybe"
							></LabelStyled>

							<div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3"></div>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>Size</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<ul className="flex gap-x-5 max-w-md mx-auto">
						<li className="relative">
							<input className="sr-only peer" type="checkbox" value="yes" id="answer_size" />
							<LabelStyled
								className="flex w-8 h-8 border rounded-full border-gray-300 cursor-pointer focus:outline-none peer-checked:ring-gray-400 peer-checked:ring-offset-1 peer-checked:ring-2  peer-checked:border-transparent"
								htmlFor="answer_size"
							></LabelStyled>
							<div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3"></div>
						</li>

						<li className="relative">
							<input className="sr-only peer" type="checkbox" value="maybe" id="answer_size" />
							<LabelStyled
								color="#000"
								className="flex w-8 h-8 border rounded-full border-gray-300 cursor-pointer focus:outline-none peer-checked:ring-gray-400 peer-checked:ring-offset-1 peer-checked:ring-2 peer-checked:border-transparent"
								htmlFor="answer_size"
							></LabelStyled>

							<div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3"></div>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
export default AccordionProduct;
