import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getLocal } from "../../utils/localstorage";

type Props = {
	children: React.ReactElement | null;
};

const Private = ({ children }: Props) => {
	const [exist, saveExist] = useState(() => getLocal("user") ?? false);
	useEffect(() => {
		saveExist(exist);
		return () => saveExist(false);
	}, [exist]);

	return <>{+exist.role !== 0 && exist ? children : <Navigate to="/" />}</>;
};

export default Private;
