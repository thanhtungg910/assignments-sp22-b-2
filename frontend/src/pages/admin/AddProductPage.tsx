import React, { useEffect, useReducer } from "react";
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
import IProducts from "../../interfaces/products";
import handleReducer from "../../reducers/products";

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
const initial: any = {
	loading: false,
	toggle: false,
	category: "",
	sale: "",
	color: [],
	size: [],
	colorName: [],
};
const AddProductPage: React.FC = () => {
	const theme = useTheme();
	const [state, dispath] = useReducer(handleReducer, initial);
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
				dispath({
					type: "SET_COLOR",
					payload: data,
				});
				// setColorName(data);
			} catch (error) {
				console.log(error);
			}
		};
		getColors();
	}, []);

	const handleChangeColor = (event: SelectChangeEvent<typeof state.color>) => {
		const {
			target: { value },
		} = event;
		dispath({
			type: "CHANGE_MULTI",
			brand: "color",
			payload: typeof value === "string" ? value.split(",") : value,
		});
	};
	const handleChangeSize = (event: SelectChangeEvent<typeof state.size>) => {
		const {
			target: { value },
		} = event;
		dispath({
			type: "CHANGE_MULTI",
			brand: "size",
			payload: typeof value === "string" ? value.split(",") : value,
		});
	};

	const handleChangeCategory = (event: any) => {
		dispath({
			type: "CHANGE",
			brand: "category",
			payload: event.target.value,
		});
	};
	const handleChangeSale = (event: any) => {
		dispath({
			type: "CHANGE",
			brand: "sale",
			payload: event.target.value,
		});
	};

	const onSubmit: any = async (data: any) => {
		dispath({
			type: "LOADING",
			payload: true,
		});
		const response = Array.from(data.images).map(async (file: any) => {
			return await uploadFile(file);
		});
		const images = await Promise.all(response);
		data.images = images;
		const product: IProducts = {
			title: data.title,
			saleoff: /* +data.sale */ 10,
			albums: [...data.images],
			image: data.images[1],
			quantity: +data.amount,
			category: /* data.category */ "6231ee6c535ea7fef6738b6f",
			options: [
				{
					name: "color",
					value: [...data.color],
				},
				{
					name: "size",
					value: [...data.size],
				},
			],
			price: +data.price,
			description:
				"asdsd 6231ee6c535ea7fef6738b6f 6231ee6c535ea7fef6738b6f 6231ee6c535ea7fef6738b6f 6231ee6c535ea7fef6738b6f",
		};
		dispath({
			type: "SUBMIT",
			loading: false,
			toggle: true,
			payload: product,
		});

		// dispath({
		// 	type: "LOADING",
		// 	payload: false,
		// });
		reset();
		// setToggle(true);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Alerts loading={state.loading} open={state.toggle} setToggle={() => {}} />
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
								</Grid>

								<Grid item xs={6}>
									<FormSelectOption
										title="category"
										label="Category"
										controls={control}
										state={state.category}
										handleChangeState={handleChangeCategory}
										errors={errors?.category}
									/>
								</Grid>

								<Grid item xs={6}>
									<FormSelectOption
										title="sale"
										label="Sale"
										controls={control}
										state={state.sale}
										handleChangeState={handleChangeSale}
										errors={errors?.sale}
									/>
								</Grid>
								<Grid item xs={6}>
									<InputField
										title="amount"
										label="Amount"
										type="number"
										controls={control}
										errors={errors?.amount}
									/>
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
						<SelectMultiple
							register={register}
							title="color"
							value={state.color}
							onChange={handleChangeColor}
							MenuProps={MenuProps}
							errors={errors.color}
						>
							{state.colorName.length > 0 &&
								state.colorName.map(({ nameId, hexCode, name: title }) => (
									<MenuItem
										key={nameId}
										value={hexCode}
										style={getStyles(`${title}`, `${title}`, theme)}
									>
										{title}
									</MenuItem>
								))}
						</SelectMultiple>
						<SelectMultiple
							register={register}
							title="size"
							value={state.size}
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
