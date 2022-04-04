import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
type Props = {
	children: any;
};
const SwiperRatio = ({ children }: Props) => {
	return (
		<Swiper
			slidesPerView={3}
			pagination={{
				clickable: true,
			}}
			className="grid grid-cols-4"
		>
			{children}
		</Swiper>
	);
};

export default SwiperRatio;
