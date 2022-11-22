import React from "react";
import { shopData, roundedCircles } from "../../utils/data";
const Shop = () => {
	return (
		<div className="p-[30px] sm:p-[100px]">
			<div className="mb-4 text-[#313131] ">
				<p className="my-1 text-2xl font-bold">Shop Our Merch</p>
                <div className='md:flex gap-4 items-center'>
                    <p>
                        All products and designs are available in different colors
                    </p>
                    <div className=" flex gap-2">
                        {roundedCircles.map((item, index) => (
                            <div key={index} style={{backgroundColor:`${item}`}} className={` w-6 h-6 rounded-full my-4 md:my-0`}  />
                        ))}

                    </div>
                </div>
			</div>
			<div className="grid   w-full md:grid-cols-3 md:gap-4 lg:grid-cols-4">
				{shopData.map((item, index) => (
					<div key={index} className="mb-10 cursor-pointer ">
						<div className="container">
							<img
								src={item.image}
								alt="merch-pic"
								className="block w-full"
							/>
							<div className="overlay flex items-center justify-center rounded-md">
								<a href={item.link}>
									<div className="flex cursor-pointer   items-center justify-center gap-4 rounded-full border border-primary-main bg-white px-4 py-2 md:h-[45px] md:w-[150px]">
										<p className="text-lg text-primary-main">
											Buy Now
										</p>

									</div>
								</a>
							</div>
						</div>

						<div>
							<p className="my-2 text-[#6C6C6C]">{item.name}</p>
							<p className="font-bold text-[#131313]">
								{item.price}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Shop;
