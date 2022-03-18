import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const DetailPage: React.FC = (props: Props) => {
	const { slug } = useParams();
	console.log(slug);

	return <div>: React.FC</div>;
};

export default DetailPage;
