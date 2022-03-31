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
import { Navigate } from "react-router-dom";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step: Number) {
	switch (step) {
		case 0:
			return <AddressForm />;
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

	const handleNext = () => {
		setState(state + 1);
	};

	const handleBack = () => {
		setState(state - 1);
	};

	const handleReset = () => {
		setState(0);
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
				<React.Fragment>
					{getStepContent(state)}
					<div>
						{state != 0 && <Button onClick={handleBack}>Back</Button>}
						<Button variant="contained" color="primary" onClick={handleNext}>
							{state == 2 ? "Ok" : "Next"}
						</Button>
					</div>
				</React.Fragment>
			</React.Fragment>
		</div>
	);
};

export default Checkout;
