import { ReactElement } from "react";

type Props = {
	children: ReactElement;
	icon: JSX.Element;
	title: String;
};

const Pricing = ({ icon, title, children }: Props) => {
	return (
		<div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
			<div className="flex-shrink-0">
				<h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
					{title}
				</h2>
			</div>
			<div className="flex-shrink-0">
				<span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
					{icon}
				</span>
			</div>
			{children}
		</div>
	);
};

export default Pricing;
