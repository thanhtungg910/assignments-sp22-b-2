import { TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, FieldError } from "react-hook-form";

type Props = {
	title: string;
	controls: any;
	label: string;
	state?: string;
	type?: string;
	handleChangeState?: (event: any) => void;
	errors: FieldError | undefined;
};

const InputField: React.FC<Props> = ({
	title,
	label,
	controls,
	type = "text",
	state,
	handleChangeState,
	errors,
}: Props) => {
	return (
		<div>
			<Controller
				name={title}
				rules={{ required: true }}
				control={controls}
				render={({ field }) => (
					<TextField fullWidth label={label} type={type} variant="standard" {...field} />
				)}
			/>
			{errors && <Typography color="error">This is required</Typography>}
		</div>
	);
};
export default InputField;
