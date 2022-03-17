import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
type IaccordionProduct = {
	categories: { _id?: String; title: String; slug?: String }[];
	setCategories: React.Dispatch<React.SetStateAction<{}>>;
	checked: {};
};
const AccordionProduct: React.FC<IaccordionProduct> = ({ categories, setCategories, checked }) => {
	const [expanded, setExpanded] = React.useState<boolean>(true);
	const handleChange = (event: React.ChangeEvent<EventTarget & HTMLInputElement>) => {
		setCategories({
			...checked,
			[event.target.name]: event.target.checked,
		});
	};
	return (
		<div>
			<Accordion expanded={expanded}>
				<AccordionSummary onClick={() => setExpanded(!expanded)} expandIcon={<ExpandMoreIcon />}>
					<Typography>Categories</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormGroup>
						{categories.length > 0 &&
							categories.map((category, index) => (
								<FormControlLabel
									key={index}
									control={<Checkbox />}
									label={category.title.toString()}
									name={category.slug?.toString()}
									onChange={handleChange}
								/>
							))}
					</FormGroup>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
						sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
export default AccordionProduct;
