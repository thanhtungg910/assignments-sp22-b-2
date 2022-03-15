import styled from "styled-components";
export const CategoryStyled = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	height: 100%;
	cursor: pointer;
	.category--overlay {
		transition: all 0.5s;
		position: absolute;
		inset: 0;
		h2 {
			font-size: 24px;
		}
	}
	&:hover .category--overlay {
		background: rgba(0, 0, 0, 0.2);
	}
`;
