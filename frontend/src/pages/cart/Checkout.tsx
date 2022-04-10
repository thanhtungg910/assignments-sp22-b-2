import Checkout from "../../components/cart/Checkout";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
type Props = {};
const ENDPOINT = "http://localhost:5001";
const CheckoutPage = (props: Props) => {
	const [socket, setSocket] = useState<any>(null);
	useEffect(() => {
		setSocket(io(ENDPOINT, { transports: ["websocket"] }));
	}, []);
	console.log(socket);

	return (
		<div>
			<Checkout />
		</div>
	);
};

export default CheckoutPage;
