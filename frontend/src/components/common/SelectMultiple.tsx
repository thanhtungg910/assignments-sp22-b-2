import React from "react";
import {
	Box,
	Chip,
	FormControl,
	InputLabel,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import { FieldError } from "react-hook-form";

type Props = {
	register: any;
	value: string[] | undefined;
	onChange: (event: SelectChangeEvent<string[]>) => void;
	MenuProps: {
		PaperProps: {
			style: {
				maxHeight: number;
				width: number;
			};
		};
	};
	title: String;
	children: any;
	errors?: FieldError | undefined | never[];
};

const SelectMultiple: React.FC<Props> = ({
	register,
	title,
	value,
	onChange,
	MenuProps,
	children,
	errors,
}: Props) => {
	return (
		<>
			<FormControl fullWidth>
				<InputLabel id="demo-multiple-chip-label">{title}</InputLabel>
				<Select
					{...register(title)}
					multiple
					value={value}
					onChange={onChange}
					input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
					renderValue={(selected: []) => (
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
							{selected.map((value: String, index) => (
								<Chip key={index} label={value} />
							))}
						</Box>
					)}
					MenuProps={MenuProps}
				>
					{children}
				</Select>
			</FormControl>
			{errors && <Typography color="error">This is required</Typography>}
		</>
	);
};

export default SelectMultiple;
