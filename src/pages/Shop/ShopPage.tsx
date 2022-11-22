import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Shop from "../../components/Shop";
import { Link } from "react-router-dom";

import useMediaQuery from "../../hooks/useMediaQuery";

const ShopPage = () => {
	const smallScreen = useMediaQuery("(max-width: 600px)");
	return (
		<div>
			<nav className="flex w-full items-center justify-between p-5 pb-10">
				<figure className="aspect-[157/49] w-[11.5vw] min-w-[105px] max-w-[200px]">
					<LazyLoadImage
						src={
							smallScreen
								? "/images/logo-small-screen.svg"
								: "/images/logo.svg"
						}
						className="undraggable h-full w-full object-contain"
					/>
				</figure>

				<Link
					to="/"
					className=" text-[#6c6c6c]md:flex items-center gap-2 text-xl font-medium lg:mt-4"
				>
					<span>back</span>
				</Link>
			</nav>
			<hr className="bg-[#6c6c6c]" />

			<Shop />
		</div>
	);
};

export default ShopPage;
