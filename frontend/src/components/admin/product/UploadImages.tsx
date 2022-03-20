import React from "react";

type Props = { field: Object };

const UploadImages: React.FC<Props> = (props: Props) => {
	return (
		<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
			<div className="space-y-1 text-center">
				<img
					src="https://2.bp.blogspot.com/-muVbmju-gkA/Vir94NirTeI/AAAAAAAAT9c/VoHzHZzQmR4/s1600/placeholder-image.jpg"
					className="mx-auto w-24 h-24 object-cover"
				/>
				<div className="flex text-sm text-gray-600">
					<label
						htmlFor="file-upload"
						className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
					>
						<span>Upload a file</span>
						<input
							id="file-upload"
							{...props.field}
							multiple
							name="file-upload"
							type="file"
							className="sr-only"
						/>
					</label>
					<p className="pl-1">or drag and drop</p>
				</div>
				<p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
			</div>
		</div>
	);
};

export default UploadImages;
