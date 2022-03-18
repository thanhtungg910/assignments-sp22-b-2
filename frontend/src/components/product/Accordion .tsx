import * as React from "react";
import Accordion from "@mui/material/Accordion";
import TextField from "@mui/material/TextField";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl } from "@mui/material";
type IAccor = {
	query: String;
	setQuery: React.Dispatch<React.SetStateAction<String>>;
};

const AccordionProduct: React.FC<IAccor> = ({ query, setQuery }) => {
	const [expanded, setExpanded] = React.useState<boolean>(true);
	const handleOnchange = (event: React.HTMLInputTypeAttribute) => {
		setQuery(event.target.value);
	};
	return (
		<div>
			<Accordion expanded={expanded}>
				<AccordionSummary onClick={() => setExpanded(!expanded)} expandIcon={<ExpandMoreIcon />}>
					<Typography>Search</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormControl fullWidth>
						<TextField onChange={handleOnchange} label="Search" value={query}></TextField>
					</FormControl>
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
