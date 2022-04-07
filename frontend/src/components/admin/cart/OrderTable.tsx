import React from "react";

type Props = {
	data: any[];
};

const OrderTable = ({ data }: Props) => {
	return (
		<div className="overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Product name
						</th>
						<th scope="col" className="px-6 py-3">
							Color
						</th>
						<th scope="col" className="px-6 py-3">
							Size
						</th>
						<th scope="col" className="px-6 py-3">
							Price
						</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.length > 0 &&
						data.map((order, index) => (
							<tr key={index} className="bg-white border-b  ">
								<th
									scope="row"
									className="px-6 py-4 font-medium   whitespace-nowrap"
								>
									{order.product.title}
								</th>
								<td className="px-6 py-4">{order.color}</td>
								<td className="px-6 py-4">{order.size}</td>
								<td className="px-6 py-4">
									{order.price.toLocaleString()}
									<sup>x{order.quantity}</sup>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default OrderTable;
