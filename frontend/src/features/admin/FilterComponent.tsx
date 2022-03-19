import React from "react";
import styled from "styled-components";
const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;
	&:hover {
		cursor: pointer;
	}
`;
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
			id="search"
			type="text"
			placeholder="Filter By Name"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<button type="button" onClick={onClear}>
			X
		</button>
	</>
);
export default FilterComponent;
