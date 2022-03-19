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
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm, Controller } from "react-hook-form";
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
								<TextField fullWidth label="Amount" type="file" variant="standard" />
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
						height: 240,
					}}
				>
					{/* <Deposits /> */}
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
