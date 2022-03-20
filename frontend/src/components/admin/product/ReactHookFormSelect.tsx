import { FormControl, InputLabel, Select } from "@mui/material";
import { Controller } from "react-hook-form";
const ReactHookFormSelect = ({ name, label, control, defaultValue, children, ...props }: any) => {
	const labelId = `${name}-label`;
	return (
		<FormControl {...props} fullWidth>
			<InputLabel id={labelId}>{label}</InputLabel>
			<Controller
				name={name}
				control={control}
				defaultValue={defaultValue}
				render={({ formState }) => (
					<Select label={label} {...formState}>
						{children}
					</Select>
				)}
			/>
		</FormControl>
	);
};
export default ReactHookFormSelect;
