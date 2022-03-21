import axios from "axios";

async function uploadFile(File: string | Blob) {
	const API_CLOUDDINARY = "https://api.cloudinary.com/v1_1/dhfndew6y/image/upload";
	const UPLOAD_PRESET = "njlgbczl";
	const formData = new FormData();

	formData.append("file", File);
	formData.append("upload_preset", UPLOAD_PRESET);
	const res = await axios.post(API_CLOUDDINARY, formData, {
		headers: {
			"content-type": "multipart/form-data",
		},
	});
	const data = await res.data;
	const img = await data.secure_url;
	return img;
}
export default uploadFile;
