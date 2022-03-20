import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	TextField,
	Typography,
	SelectChangeEvent,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm, Controller } from "react-hook-form";

import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const names = [
	"Oliver Hansen",
	"Van Henry",
	"April Tucker",
	"Ralph Hubbard",
	"Omar Alexander",
	"Carlos Abbott",
	"Miriam Wagner",
	"Bradley Wilkerson",
	"Virginia Andrews",
	"Kelly Snyder",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

type Props = {};

const AddProduct = (props: Props) => {
	const [category, setCategory] = React.useState("");

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: "",
		},
	});
	const theme = useTheme();
	const [personName, setPersonName] = React.useState<string[]>([]);

	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
		const {
			target: { value },
		} = event;
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	const handleChangeCategory = (event: any) => {
		setCategory(event.target.value);
	};
	const onSubmit: object = (data: object) => {
		console.log(data);
		console.log(`data`);
	};
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={8} lg={9}>
				<Paper
					sx={{
						p: 2,
						minHeight: 240,
					}}
				>
					<Typography variant="h5">Add products</Typography>
					<Grid
						xs={12}
						sx={{
							p: 2,
							minHeight: 240,
						}}
					>
						<Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
							<Grid item xs={6}>
								<TextField fullWidth label="Title" variant="standard" />
							</Grid>
							<Grid item xs={6}>
								<TextField fullWidth label="Price" type="number" variant="standard" />
							</Grid>
							<Grid item xs={6}>
								<FormControl variant="standard" fullWidth>
									<InputLabel id="demo-simple-select-standard-label">Categories</InputLabel>
									<Select
										labelId="demo-simple-select-standard-label"
										id="demo-simple-select-standard"
										value={category}
										onChange={handleChangeCategory}
										label="category"
										fullWidth
									>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={6}>
								<FormControl variant="standard" fullWidth>
									<InputLabel id="demo-simple-select-standard-label">Sale off</InputLabel>
									<Select
										labelId="demo-simple-select-standard-label"
										id="demo-simple-select-standard"
										value={category}
										onChange={handleChangeCategory}
										label="category"
										fullWidth
									>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={6}>
								<TextField fullWidth label="Amount" variant="standard" />
							</Grid>
							<Grid item xs={6}>
								{/* <TextField fullWidth label="Amount" type="file" variant="standard" /> */}

								<label className="block text-sm font-medium text-gray-700">Cover photo</label>
								<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
									<div className="space-y-1 text-center">
										<img
											src="https://2.bp.blogspot.com/-muVbmju-gkA/Vir94NirTeI/AAAAAAAAT9c/VoHzHZzQmR4/s1600/placeholder-image.jpg"
											className="mx-auto h-12 w-12 text-gray-400"
										/>
										<div className="flex text-sm text-gray-600">
											<label
												htmlFor="file-upload"
												className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
											>
												<span>Upload a file</span>
												<input
													id="file-upload"
													name="file-upload"
													type="file"
													className="sr-only"
												/>
											</label>
											<p className="pl-1">or drag and drop</p>
										</div>
										<p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
									</div>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			{/**
			 * Options start
			 */}
			<Grid item xs={12} md={4} lg={3}>
				<Paper
					sx={{
						p: 2,
						display: "flex",
						flexDirection: "column",
						rowGap: 2,
						minHeight: 240,
					}}
				>
					{/* color start */}
					<FormControl fullWidth>
						<InputLabel id="demo-multiple-chip-label">Color</InputLabel>
						<Select
							labelId="demo-multiple-chip-label"
							id="demo-multiple-chip"
							multiple
							value={personName}
							onChange={handleChange}
							input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
							renderValue={(selected) => (
								<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
									{selected.map((value) => (
										<Chip key={value} label={value} />
									))}
								</Box>
							)}
							MenuProps={MenuProps}
						>
							{names.map((name) => (
								<MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
									{name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					{/* color end */}
					{/* Size start */}
					<FormControl fullWidth>
						<InputLabel id="demo-multiple-chip-label">Size</InputLabel>
						<Select
							labelId="demo-multiple-chip-label"
							id="demo-multiple-chip"
							multiple
							value={personName}
							onChange={handleChange}
							input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
							renderValue={(selected) => (
								<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
									{selected.map((value) => (
										<Chip key={value} label={value} />
									))}
								</Box>
							)}
							MenuProps={MenuProps}
						>
							{names.map((name) => (
								<MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
									{name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					{/* Size end */}
				</Paper>
			</Grid>

			{/* Recent Orders */}
			<Grid item xs={12}>
				<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
					<TextField multiline fullWidth rows={4}></TextField>
				</Paper>
			</Grid>
		</Grid>
	);
};
export default AddProduct;
/* 	<Controller
										name="firstName"
										control={control}
										rules={{ required: true }}
										render={({ field }) => <TextField {...field} />}
									/>
									

						<Box>
							<TextField label="Price" type="number"></TextField>
						</Box>
						<Box>
							<Select
								labelId="demo-simple-select-label"
								value={age}
								onChange={handleChange}
								id="sale"
								label="Sale"
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</Box>
						<Box>
							<TextField label="Amount" type="number"></TextField>
						</Box>
						<Box>
							<Select
								labelId="demo-simple-select-label"
								value={age}
								onChange={handleChange}
								id="sale"
								label="Sale"
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</Box>
									
									*/
