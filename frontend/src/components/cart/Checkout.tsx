import React, { useState } from "react";
import Swal from "sweetalert2";
import {
	FieldValues,
	FormState,
	useForm,
	UseFormRegister,
} from "react-hook-form";
import { Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { createOrderProducts } from "../../api/carts";
import { getLocal } from "../../utils/localstorage";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { addOrder } from "../../reducers/order";

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
					price: Number;
					color: String;
					size: String;
			  }
			| FormState<FieldValues>
			| any;
		data?:
			| {
					quantity: Number | any;
					_id: String;
					title: String;
			  }[]
			| any;
	}
) {
	switch (step) {
		case 0:
			return <AddressForm register={props.register} error={props.errors} />;
		case 1:
			return <PaymentForm />;
		case 2:
			return <Review data={props.data} />;
		case 3:
			return <Navigate to="/products" />;
		default:
			return <Navigate to="/products" />;
	}
}

const Checkout = () => {
	const [state, setState] = useState<number>(0);
	console.log("🚀 => Checkout => state", state);
	const navigate = useNavigate();
	const orderList = useAppSelector((state) => [...state.orders.value]);
	const cartList = useAppSelector((state) => [...state.carts.value]);
	const userId = useAppSelector((state) => state.users);
	console.log("🚀 => Checkout => userId", userId);
	const dispatch = useAppDispatch();

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
		// const { _id } = getLocal("user");
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
					price: cartList[i].price,
					color: cartList[i].color,
					size: cartList[i].size,
				})
			);
		}
		handleNext();
	});
	const handleOrder = () => {
		orderList.forEach((item) => {
			createOrderProducts(item).catch(
				(err) =>
					Swal.fire({
						title: "Opp...!",
						icon: "error",
					})
				//.then(() => navigate("/products"))
				// .catch(() => navigate("/products"))
			);
		});
		Swal.fire({
			title: "Success!",
			icon: "success",
			confirmButtonText: "Ok!",
		}).then(() => {
			// navigate("/products");
			// dispatch(resetCart());
		});
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
						data: cartList,
					})}
					<div>
						{state != 0 && <Button onClick={handleBack}>Back</Button>}
						{/**
						 * Add to db
						 */}
						{state == 2 ? (
							<Button variant="contained" color="primary" onClick={handleOrder}>
								OK
							</Button>
						) : state != 1 ? (
							/**
							 * Add to store
							 */
							<Button type="submit" variant="contained" color="primary">
								Next
							</Button>
						) : (
							/**
							 * Next step
							 */
							<Button
								variant="contained"
								color="primary"
								onClick={() => setState(state + 1)}
							>
								Next
							</Button>
						)}
					</div>
				</form>
			</React.Fragment>
		</div>
	);
};

export default Checkout;
