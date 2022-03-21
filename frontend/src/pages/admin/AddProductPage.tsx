import React, { useEffect } from "react";
import {
	Button,
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
import { useForm, Controller } from "react-hook-form";

import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import InputField from "../../components/common/InputField";
import FormSelectOption from "../../components/common/FormSelectOption";
import UploadImages from "../../components/admin/product/UploadImages";
import axios from "axios";
import uploadFile from "../../utils/uploadFile";

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

const AddProductPage: React.FC = (props: Props) => {
	const theme = useTheme();
	const [category, setCategory] = React.useState("");
	const [sale, setSale] = React.useState("");
	const [color, setColor] = React.useState<string[]>([]);
	const [size, setSize] = React.useState<string[]>([]);
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: "",
			price: "",
			category: "",
			images: [],
			sale: "",
			amount: "",
			color: [],
			size: [],
			description: "",
		},
	});

	const handleChangeColor = (event: SelectChangeEvent<typeof color>) => {
		const {
			target: { value },
		} = event;
		setColor(typeof value === "string" ? value.split(",") : value);
	};
	const handleChangeSize = (event: SelectChangeEvent<typeof size>) => {
		const {
			target: { value },
		} = event;
		setSize(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	const handleChangeCategory = (event: any) => {
		setCategory(event.target.value);
	};
	const handleChangeSale = (event: any) => {
		setSale(event.target.value);
	};

	const onSubmit: any = async (data: any) => {
		const response = Array.from(data.images).map(async (file: any) => {
			return await uploadFile(file);
		});
		const images = await Promise.all(response);
		data.images = images;
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
							sx={{
								p: 2,
								minHeight: 240,
							}}
						>
							<Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
								<Grid item xs={6}>
									{/* Title start */}
									<InputField
										title="title"
										label="Title"
										controls={control}
										errors={errors?.title}
									/>
									{/* Title end */}
								</Grid>
								<Grid item xs={6}>
									{/* Title start */}
									<InputField
										title="price"
										label="Price"
										type="number"
										controls={control}
										errors={errors?.price}
									/>
									{/* Title end */}
								</Grid>

								<Grid item xs={6}>
									{/* Form category start */}
									<FormSelectOption
										title="category"
										label="Category"
										controls={control}
										state={category}
										handleChangeState={handleChangeCategory}
										errors={errors?.category}
									/>
									{/* Form category end */}
								</Grid>

								<Grid item xs={6}>
									{/* Form sale start */}
									<FormSelectOption
										title="sale"
										label="Sale"
										controls={control}
										state={sale}
										handleChangeState={handleChangeSale}
										errors={errors?.sale}
									/>
									{/* Form sale end */}
								</Grid>
								<Grid item xs={6}>
									{/* Amount start */}
									<InputField
										title="amount"
										label="Amount"
										controls={control}
										errors={errors?.amount}
									/>
									{/* Amount end */}
								</Grid>

								<Grid item xs={6}>
									<UploadImages
										field={register("images", { required: true })}
										errors={errors?.images}
									/>
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
						{/* <Controller
							name="color"
							// rules={{ required: true }}
							control={control}
							render={({ field }) => (
								<FormControl fullWidth>
									<InputLabel id="demo-multiple-chip-label">Color</InputLabel>
									<Select
										{...field}
										multiple
										value={color}
										onChange={handleChangeColor}
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
											<MenuItem key={name} value={name} style={getStyles(name, color, theme)}>
												{name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							)}
						/>
						{errors?.color && <Typography color="error">This is required</Typography>} */}
						<FormControl fullWidth>
							<InputLabel id="demo-multiple-chip-label">Color</InputLabel>
							<Select
								{...register("color")}
								multiple
								value={color}
								onChange={handleChangeColor}
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
									<MenuItem key={name} value={name} style={getStyles(name, color, theme)}>
										{name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						{/* color end */}
						{/* Size start */}
						<Controller
							name="size"
							// rules={{ required: true }}
							control={control}
							render={({ formState }) => (
								<FormControl fullWidth>
									<InputLabel id="demo-multiple-chip-label">Size</InputLabel>
									<Select
										labelId="demo-multiple-chip-label"
										id="demo-multiple-chip"
										multiple
										value={size}
										onChange={handleChangeSize}
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
											<MenuItem key={name} value={name} style={getStyles(name, size, theme)}>
												{name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							)}
						/>
						{errors?.size && <Typography color="error">This is required</Typography>}

						{/* Size end */}
						<Button color="primary" variant="contained" type="submit">
							Add
						</Button>
					</Paper>
				</Grid>

				{/* Recent Orders */}
				<Grid item xs={12}>
					<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
						<TextField multiline fullWidth rows={4}></TextField>
					</Paper>
				</Grid>
			</Grid>
		</form>
	);
};

export default AddProductPage;
