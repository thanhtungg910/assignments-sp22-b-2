import { Button, FormControl, TextField } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface IFormInput {
	email: String;
	password: String;
}

export default function SignUp() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

	return (
		<FormControl
			sx={{
				width: 350,
				maxWidth: "100%",
				paddingLeft: 3,
				paddingRight: 3,
				color: "black",
			}}
		>
			<div className="relative z-0 mb-6 w-full group ">
				<input
					type="email"
					className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					{...register("email", { required: true, minLength: 5 })}
				/>
				<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
					Email address
				</label>
				{errors.email && <span className="text-red-600">This field is required email</span>}
			</div>
			<div className="relative z-0 mb-6 w-full group">
				<input
					type="password"
					className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					{...register("password", { required: true, minLength: 8 })}
				/>
				<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
					Password
				</label>
				{errors.password && <span className="text-red-600">This field is required password</span>}
			</div>

			<Button variant="contained" onClick={handleSubmit(onSubmit)}>
				login
			</Button>
		</FormControl>
	);
}
