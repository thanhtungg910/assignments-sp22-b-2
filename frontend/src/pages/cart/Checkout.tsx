import Checkout from "../../components/cart/Checkout";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
type Props = {};
const ENDPOINT = "http://localhost:5001/orders";
const CheckoutPage = (props: Props) => {
	const [socket, setSocket] = useState<any>(null);
	useEffect(() => {
		setSocket(io(ENDPOINT, { transports: ["websocket"] }));
	}, []);

	return (
		<div>
			<Checkout socket={socket} />
		</div>
	);
};

export default CheckoutPage;
