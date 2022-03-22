import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
	Button,
	Grid,
	MenuItem,
	Paper,
	TextField,
	Typography,
	SelectChangeEvent,
} from "@mui/material";

import { Theme, useTheme } from "@mui/material/styles";
import InputField from "../../components/common/InputField";
import FormSelectOption from "../../components/common/FormSelectOption";
import UploadImages from "../../components/admin/product/UploadImages";
import uploadFile from "../../utils/uploadFile";
import SelectMultiple from "../../components/common/SelectMultiple";
import Alerts from "../../components/common/Alerts";

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

const sizes = ["S", "M", "L", "XL", "XXL"];

function getStyles(name: string, color: String, theme: Theme) {
	return {
		fontWeight:
			color.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

const AddProductPage: React.FC = () => {
	const theme = useTheme();
	const [loading, setLoading] = useState<boolean>(false);
	const [toggle, setToggle] = React.useState<boolean>(false);
	const [category, setCategory] = React.useState("");
	const [sale, setSale] = React.useState("");
	const [color, setColor] = React.useState<string[]>([]);
	const [size, setSize] = React.useState<string[]>([]);
	const [colorName, setColorName] = React.useState<any[]>([]);
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			title: "",
			price: "",
			category: "",
			sale: "",
			amount: 1,
			description: "",
			color: [],
			size: [],
			images: [],
		},
	});
	useEffect(() => {
		const getColors = async () => {
			try {
				const { data } = await axios.get("http://localhost:5001/api/colors");
				setColorName(data);
			} catch (error) {
				console.log(error);
			}
		};
		getColors();
	}, []);

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
		setLoading(true);
		const response = Array.from(data.images).map(async (file: any) => {
			return await uploadFile(file);
		});
		const images = await Promise.all(response);
		data.images = images;
		setLoading(false);
		console.log(data);
		reset();
		setToggle(true);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Alerts loading={loading} open={toggle} setToggle={setToggle} />
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
										type="number"
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
						<SelectMultiple
							register={register}
							title="color"
							value={color}
							onChange={handleChangeColor}
							MenuProps={MenuProps}
							errors={errors.color}
						>
							{colorName.length > 0 &&
								colorName.map(({ nameId, hexCode, name: title }) => (
									<MenuItem
										key={nameId}
										value={hexCode}
										style={getStyles(`${title}`, `${title}`, theme)}
									>
										{title}
									</MenuItem>
								))}
						</SelectMultiple>
						{/* </FormControl> */}
						{/* color end */}
						{/* Size start */}

						<SelectMultiple
							register={register}
							title="size"
							value={size}
							onChange={handleChangeSize}
							MenuProps={MenuProps}
							errors={errors?.size}
						>
							{sizes.length > 0 &&
								sizes.map((sizeValue) => (
									<MenuItem
										key={sizeValue}
										value={sizeValue}
										style={getStyles(sizeValue, sizeValue, theme)}
									>
										{sizeValue}
									</MenuItem>
								))}
						</SelectMultiple>

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
