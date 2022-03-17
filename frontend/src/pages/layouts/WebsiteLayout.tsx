import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

type Props = {};

const WebsiteLayout = (props: Props) => {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
};
export default WebsiteLayout;
