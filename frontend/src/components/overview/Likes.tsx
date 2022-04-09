import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";
import { getRelated } from "../../api/products";
import IProducts from "../../interfaces/products";
type IProps = {
	slugs?: String | undefined;
};
export default function Likes({ slugs }: IProps) {
	const fetchData = useRef<Object | any>({});
	const [imageData, setImageData] = useState<[]>([]);
	fetchData.current = async () => {
		const { data } = await getRelated(slugs);
		setImageData(data);
	};
	useEffect(() => {
		fetchData.current();
	}, []);
	return (
		<Box>
			<ImageList variant="masonry" cols={3} gap={9}>
				{imageData.length > 0 &&
					imageData.map((item: IProducts, index) => (
						<Link to={`/products/${item.slug}`} key={index}>
							<ImageListItem sx={{ display: "block" }} className="p-7 h-min">
								<img
									srcSet={`${item.image}?w=100&auto=format&dpr=2`}
									alt={`${item.title}`}
									loading="lazy"
									className="object-cover"
								/>
								<Box className="flex justify-between">
									<ImageListItemBar position="below" title={item.title} />
									<ImageListItemBar position="below" title={+item.price} />
								</Box>
							</ImageListItem>
						</Link>
					))}
			</ImageList>
		</Box>
	);
}
