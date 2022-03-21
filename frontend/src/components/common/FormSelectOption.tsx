import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { Controller, FieldError } from "react-hook-form";

type Props = {
	title: string;
	controls: any;
	label: string;
	state: string;
	handleChangeState: (event: any) => void;
	errors: FieldError | undefined;
};

const FormSelectOption: React.FC<Props> = ({
	title,
	label,
	controls,
	state,
	handleChangeState,
	errors,
}: Props) => {
	return (
		<>
			<Controller
				name={title}
				// rules={{ required: true }}
				control={controls}
				render={({ field }) => {
					return (
						<FormControl variant="standard" fullWidth>
							<InputLabel>{label}</InputLabel>
							<Select
								value={state}
								onChange={handleChangeState}
								fullWidth
								label={label}
								variant="standard"
								{...field}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={"Ten"}>Ten</MenuItem>
								<MenuItem value={"Twenty"}>Twenty</MenuItem>
								<MenuItem value={"Thirty"}>Thirty</MenuItem>
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
