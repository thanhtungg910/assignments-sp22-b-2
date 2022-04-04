import React, { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
const useHandleChange = (state: any, dispatch: React.Dispatch<any>) => {
	const [textedit, setTextEdit] = useState<String | null | any>("");

	const handleChangeColor = (event: SelectChangeEvent<typeof state.color>) => {
		const {
			target: { value },
		} = event;
		dispatch({
			type: "CHANGE_MULTI",
			brand: "color",
			payload: typeof value === "string" ? value.split(",") : value,
		});
	};
	const handleChangeSize = (event: SelectChangeEvent<typeof state.size>) => {
		const {
			target: { value },
		} = event;
		dispatch({
			type: "CHANGE_MULTI",
			brand: "size",
			payload: typeof value === "string" ? value.split(",") : value,
		});
	};

	const handleChangeCategory = (event: any) => {
		dispatch({
			type: "CHANGE",
			brand: "category",
			payload: event.target.value,
		});
	};
	const handleChangeSale = (event: any) => {
		dispatch({
			type: "CHANGE",
			brand: "sale",
			payload: event.target.value,
		});
	};

	return [
		handleChangeColor,
		handleChangeSize,
		handleChangeCategory,
		handleChangeSale,
		textedit,
		setTextEdit,
	];
};

export default useHandleChange;
