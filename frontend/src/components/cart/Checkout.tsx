import {
	AppBar,
	Button,
	CssBaseline,
	Paper,
	Step,
	StepLabel,
	Stepper,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
	FieldValues,
	FormState,
	useForm,
	UseFormRegister,
} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { addOrder } from "../../actions/order";
import { getLocal } from "../../utils/localstorage";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(
	step: Number,
	props: {
		register: UseFormRegister<FieldValues>;
		errors:
			| {
					name: String;
					lastname: String;
					address: String;
					phone: Number;
					city: String;
					state: String;
			  }
			| FormState<FieldValues>
			| any;
	}
) {
	switch (step) {
		case 0:
			return <AddressForm register={props.register} error={props.errors} />;
		case 1:
			return <PaymentForm />;
		case 2:
			return <Review />;
		case 3:
			return <Navigate to="/products" />;
		default:
			return <Navigate to="/products" />;
	}
}

const Checkout = () => {
	const [state, setState] = useState(0);
	const { value } = useSelector(
		(state: { orders: { value: [] } }) => state.orders
	);
	const { value: cartList } = useSelector(
		(state: { carts: { value: { quantity: Number; _id: String }[] } }) =>
			state.carts
	);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleNext = () => {
		setState(state + 1);
	};

	const handleBack = () => {
		setState(state - 1);
	};

	const handleReset = () => {
		setState(0);
	};
	const onSubmit = handleSubmit((data) => {
		const { _id } = getLocal("user");
		if (!_id) return;
		for (let i = 0; i < cartList.length; i++) {
			dispatch(
				addOrder({
					name: data.name,
					address: data.address,
					phone: +data.phone,
					quantity: +cartList[i].quantity,
					buy: cartList[i]._id,
					userId: _id,
				})
			);
		}
		handleNext();
	});
	const handleOrder = () => {
		if (state != 2) return undefined;

		console.log("handleOrder");
		setState(2);
	};

	return (
		<div className="px-64 my-6">
			<Typography component="h1" variant="h4" align="center" className="py-4">
				Checkout
			</Typography>
			<Stepper activeStep={state}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<React.Fragment>
				<form onSubmit={onSubmit}>
					{getStepContent(state, {
						register,
						errors,
					})}
					<div>
						{state != 0 && <Button onClick={handleBack}>Back</Button>}
						<Button
							type="submit"
							variant="contained"
							color="primary"
							onClick={handleOrder}
						>
							{state == 2 ? "Ok" : "Next"}
						</Button>
					</div>
				</form>
			</React.Fragment>
		</div>
	);
};

export default Checkout;
