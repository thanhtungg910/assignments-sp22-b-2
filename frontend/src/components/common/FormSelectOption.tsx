import React from "react";
import {
	Chip,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import {
	Controller,
	ControllerRenderProps,
	FieldError,
	FieldValues,
} from "react-hook-form";

type Props = {
	title: string;
	controls: any;
	label: string;
	state: any;
	handleChangeState: (event: any) => any;
	errors: FieldError | undefined;
	children: any;
};

const FormSelectOption: React.FC<Props> = ({
	title,
	label,
	controls,
	state,
	handleChangeState,
	errors,
	children,
}: Props) => {
	return (
		<>
			<Controller
				name={title}
				rules={{ required: true }}
				control={controls}
				render={({
					field,
				}: {
					field: ControllerRenderProps<FieldValues, string>;
				}) => {
					return (
						<FormControl variant="standard" fullWidth>
							<InputLabel>{label}</InputLabel>
							<Select
								variant="standard"
								{...field}
								value={field.value}
								onChange={(e) => {
									field.onChange(e);
									handleChangeState(e);
								}}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								{children}
							</Select>
						</FormControl>
					);
				}}
			/>
			{errors && <Typography color="error">This is required</Typography>}
		</>
	);
};

export default FormSelectOption;
