import React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Button, FormControl } from "@mui/material";
import ICategories from "../interfaces/categories";
import Categories from "../components/home/Categories";
import SelectUnstyled, {
	SelectUnstyledProps,
	selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, { optionUnstyledClasses } from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

const blue = {
	100: "#DAECFF",
	200: "#99CCF3",
	400: "#3399FF",
	500: "#007FFF",
	600: "#0072E5",
	900: "#003A75",
};

const grey = {
	100: "#E7EBF0",
	200: "#E0E3E7",
	300: "#CDD2D7",
	400: "#B2BAC2",
	500: "#A0AAB4",
	600: "#6F7E8C",
	700: "#3E5060",
	800: "#2D3843",
	900: "#1A2027",
};

const StyledButton = styled("button")(
	({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 30%;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 0.75em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === "dark" ? "" : grey[100]};
    border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
	({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `
);

const StyledOption = styled(OptionUnstyled)(
	({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
	z-index: 1;
`;

function CustomSelect(
	props: SelectUnstyledProps<number | any | String | React.Dispatch<React.SetStateAction<{}>>>
) {
	const components: SelectUnstyledProps<
		number | String | React.Dispatch<React.SetStateAction<{}>>
	>["components"] = {
		Root: StyledButton,
		Listbox: StyledListbox,
		Popper: StyledPopper,
		...props.components,
	};

	return <SelectUnstyled {...props} components={components} />;
}

type Props = {
	toggle: boolean;
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
	categories: ICategories[];
	setCategories: React.Dispatch<React.SetStateAction<String | Object>>;
	pathname: Object;
	total: Number;
};

const Filters: React.FC<Props> = ({
	toggle,
	onClick,
	categories,
	setCategories,
	pathname,
	total,
}) => {
	return (
		<div className="flex items-center justify-items-start border-2 px-10">
			<Button
				color="inherit"
				onClick={() => onClick(!toggle)}
				className={`py-3 ${toggle ? "w-[12%]" : "w-[40%]"} transition-all`}
			>
				<span className={`float-left inline-block ${toggle && "hidden opacity-0"} transition-all`}>
					Hide Filters
				</span>
				<FilterAltOutlinedIcon className="float-right mr-2" />
			</Button>
			<div className=" border-x-2 py-3 w-[100%] px-5 mr-2">
				Result:
				<span className="font-bold">{total || 0}</span>
			</div>
			<FormControl className="border-l-2 w-[30%] ml-4">
				<CustomSelect onChange={setCategories} value={pathname}>
					<StyledOption value={`/products`}>All</StyledOption>
					{Categories &&
						Categories.length > 0 &&
						categories.map((category, index) => (
							<StyledOption key={index} value={`/categories/${category.slug}`}>
								{category.title}
							</StyledOption>
						))}
				</CustomSelect>
			</FormControl>
		</div>
	);
};
export default Filters;
