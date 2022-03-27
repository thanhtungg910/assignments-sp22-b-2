import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, Rating } from "@mui/material";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function Description() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%", marginTop: 2 }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab label="Descriptions" {...a11yProps(0)} />
					<Tab label="Comments" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat architecto, sed maxime,
				nobis dolores distinctio ipsam porro illum doloribus voluptatibus eius voluptas facere
				corrupti aliquam quasi, velit minus nam ratione. Quas tempore harum iure nobis maxime non
				culpa sed temporibus possimus corrupti, rem quia molestias facere unde iste, sequi tempora
				velit consectetur nam totam, dicta illum consequatur. Necessitatibus, autem rem. Neque quod
				minima quis eaque reiciendis iste delectus. Commodi, quae amet assumenda nulla earum
				laboriosam tempore eius beatae obcaecati optio deserunt ullam illum ex cum debitis quisquam
				reprehenderit! Facilis, blanditiis?
			</TabPanel>
			<TabPanel value={value} index={1}>
				<div className="flex gap-4">
					<div className="flex flex-col">
						<img src="" alt="" className="object-cover rounded-full w-10 h-10" />
						<h3>tieu de</h3>
						<Rating></Rating>
					</div>
					<div>
						<h2>Tieu de</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione? Id, dolorum,
							aperiam aliquam nobis ipsam, facere quod sunt repellendus alias laudantium asperiores
							pariatur? Quos inventore unde iusto iste dignissimos?
						</p>
					</div>
				</div>
			</TabPanel>
		</Box>
	);
}
