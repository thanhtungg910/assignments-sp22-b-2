import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
// const TextField = styled.input`
// 	height: 32px;
// 	width: 200px;
// 	border-radius: 3px;
// 	border-top-left-radius: 5px;
// 	border-bottom-left-radius: 5px;
// 	border-top-right-radius: 0;
// 	border-bottom-right-radius: 0;
// 	border: 1px solid #e5e5e5;
// 	padding: 0 32px 0 16px;
// 	&:hover {
// 		cursor: pointer;
// 	}
// `;
type IFilterComponent = {
	filterText: string | number | readonly string[] | undefined;
	onFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClear: () => void;
};
const FilterComponent: React.FC<IFilterComponent> = ({
	filterText,
	onFilter,
	onClear,
}: IFilterComponent) => (
	<>
		<TextField
			size="small"
			label="Filter By Name"
			variant="outlined"
			placeholder="Filter By Name"
			value={filterText}
			onChange={onFilter}
		/>
		<Button type="button" size="medium" color="error" variant="contained" onClick={onClear}>
			X
		</Button>
	</>
);
export default FilterComponent;
