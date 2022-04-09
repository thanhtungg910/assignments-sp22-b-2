import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hook";

type Props = {
	children: React.ReactElement | null;
};

const Private = ({ children }: Props) => {
	const user = useAppSelector((state) => state.users);
	return (
		<>{+user.role !== 0 && user.username ? children : <Navigate to="/" />}</>
	);
};

export default Private;
