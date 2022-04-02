import { FieldValues, FormState, UseFormRegister } from "react-hook-form";
import { useSelector } from "react-redux";
import {
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
type IProps = {
	register: UseFormRegister<FieldValues>;
	error: {
		name: String;
		lastname: String;
		address: String;
		phone: Number;
		city: String;
		state: String;
	};
};
function AddressForm({ register, error }: IProps) {
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Shipping address
			</Typography>
			<Grid container spacing={5}>
				<Grid item xs={12} sm={6}>
					<TextField
						label="First name"
						fullWidth
						{...register("name", { required: true })}
					/>
					{error.name && (
						<Typography color="error">This is required</Typography>
					)}
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						label="First name"
						fullWidth
						{...register("lastname", { required: true })}
					/>
					{error.lastname && (
						<Typography color="error">This is required</Typography>
					)}
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Address"
						fullWidth
						{...register("address", { required: true })}
					/>
					{error.address && (
						<Typography color="error">This is required</Typography>
					)}
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Phone"
						fullWidth
						{...register("phone", { required: true })}
					/>
					{error.phone && (
						<Typography color="error">This is required</Typography>
					)}
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						label="City"
						fullWidth
						{...register("city", { required: true })}
					/>
					{error.city && (
						<Typography color="error">This is required</Typography>
					)}
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						label="State/Province/Region"
						fullWidth
						{...register("state", { required: true })}
					/>
					{error.state && (
						<Typography color="error">This is required</Typography>
					)}
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={
							<Checkbox color="secondary" name="saveAddress" value="yes" />
						}
						label="Use this address for payment details"
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default AddressForm;
