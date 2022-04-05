import Swal from "sweetalert2";

type Props = {};

const Notify = async ({
	response: {
		data: { message },
	},
}: any) => {
	await Swal.fire({
		title: "Oop..!",
		text: message,
		icon: "error",
		confirmButtonText: `<a href="/">Exit</a>`,
	});
};

export default Notify;
