import { Button, FormGroup, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
	email: String;
	password: String;
}

export default function SignUp() {
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

	return (
		<FormGroup
			sx={{
				width: 350,
				maxWidth: "100%",
				paddingLeft: 3,
				paddingRight: 3,
			}}
			onSubmit={handleSubmit(onSubmit)}
		>
			<TextField
				sx={{
					marginBottom: 5,
				}}
				fullWidth
				label="Email"
				variant="standard"
				{...register("email")}
			/>

			<TextField
				sx={{
					marginBottom: 5,
				}}
				fullWidth
				label="Password"
				variant="standard"
				{...register("password")}
			/>
			<Button variant="contained">Login</Button>
		</FormGroup>
	);
}
