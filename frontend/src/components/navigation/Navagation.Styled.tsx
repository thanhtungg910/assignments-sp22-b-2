import styled, { css } from "styled-components";
export const MenuList = styled.ul`
	overflow-y: auto;
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 60%;
	padding: 0.5em 0;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	font-size: 2em;
	font-weight: 500;
	background-color: #fff;
	transform: translateX(-50em);
	${(show: { isActive: boolean }) =>
		show.isActive &&
		css`
			transform: translateX(0);
		`};
	transition: all 0.5s linear;
	li {
		width: 100%;
		padding: 1em;
		margin: 1em 0;
		position: relative;
		transition: all 0.2s;
		&:hover {
			width: 100%;
			background-color: black;
			color: white;
		}
		a {
			margin-left: 1em;
		}
	}
`;
