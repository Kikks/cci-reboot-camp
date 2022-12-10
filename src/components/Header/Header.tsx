import "./Header.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Icon } from "@iconify/react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const smallScreen = useMediaQuery("(max-width: 600px)");
	const mediumScreen = useMediaQuery("(max-width: 900px)");

	const toggleMenu = () => {
		setShowMenu((prevState) => !prevState);
	};

	return (
		<>
			<header className="relative h-auto min-h-screen w-full overflow-hidden overflow-x-hidden md:h-auto md:max-h-[900px] md:min-h-0 lg:h-screen lg:min-h-screen">
				<div className="absolute top-[10%] right-[5%] -z-10 h-[60vw] max-h-[409px] w-[40vw] max-w-[364px] bg-secondary-main md:right-0 md:top-0 md:h-[28vw] md:w-[25vw]" />

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
					<div className="  relative">
						<div className="  right-72 flex items-center gap-4 lg:absolute ">
							<a
								href="https://ccing.org/rcql/"
								className="whitespace-nowrap rounded-full bg-primary-main p-2 text-white"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p>Quick Links</p>
							</a>
							<Link to="/shop">
								<p className="text-md whitespace-nowrap text-primary-main md:text-xl">
									Shop Merch
								</p>
							</Link>
						</div>
					</div>

					<a
						href="https://rebootcamp2022.typeform.com/RebootCamp2022"
						className="hidden items-center gap-2 text-xl font-medium text-primary-main md:flex lg:mt-4"
					>
						<span>Register Now</span>
						<Icon
							icon="akar-icons:arrow-right"
							className="text-3xl"
						/>
					</a>

					<button onClick={toggleMenu} className="block md:hidden">
						<Icon
							icon="gg:menu-right"
							className="text-3xl text-[#131313]"
						/>
					</button>
				</nav>

				<div className="gradient-bg md:-[w-40%] z-20 mx-5 mt-10 h-[550px] min-h-[550px] w-[80%] bg-orange-400 md:z-10 md:mx-0 md:mt-0 md:h-[25vw] md:max-h-[500px] md:min-h-[360px] lg:w-[87%]">
					<div className="z-20 mr-16 flex h-full flex-col justify-between  gap-10 md:h-auto md:min-h-0  md:justify-center md:px-10 lg:px-0 xl:px-24">
						<figure className="z-[999] mr-20 md:mr-0 ">
							<img
								src="/images/contagious.png"
								alt="contagious"
							/>
							.
						</figure>
						{/* <figure>
							<img src='/images/galaxy.png' alt='contagious' />.

						</figure> */}
					</div>

					<span className="absolute top-[14%] right-[15%] z-[9999] text-right text-[5.5rem] leading-[4.5rem] text-secondary-main sm:top-[14%] sm:right-[17%] md:top-[13%] md:right-[12%] md:text-[8rem] md:leading-[6rem] lg:top-[13.5%] lg:right-[12%] lg:text-[10.5rem] lg:leading-[8rem]">
						20
						<br />
						22
					</span>

					<figure className="angle absolute bottom-[21%] right-[7%] z-50 aspect-[193/223] w-[30vw] max-w-[200px] md:bottom-[27%] md:right-[7%] md:w-[20vw] md:max-w-[180px] lg:bottom-[28%] lg:right-[7%]">
						<img
							src="/images/angle.png"
							alt=""
							className="undraggable h-full w-full object-contain"
						/>
					</figure>
				</div>

				<div className="z-20 flex flex-col items-center justify-between gap-5 py-10 px-10 pt-14 text-center md:items-start md:gap-10 md:pt-10 md:text-left lg:justify-center lg:px-24 xl:px-36">
					<h3 className="text-xl font-semibold leading-[2rem] text-red-500 md:text-3xl">
						Get Ready to Catch Fire!
					</h3>

					<div className="z-50">
						<a href="https://youtube.com/@CelebrationChurchNG" target="_blank" rel="noopener noreferrer">
							<button className="flex w-full items-center gap-2 rounded-full bg-primary-main py-3 px-7 font-medium text-white md:w-auto md:text-xl">
								<span>Join us Live</span>
								<Icon
									icon="akar-icons:arrow-right"
									className="text-xl md:text-3xl"
								/>
							</button>
						</a>
					</div>
				</div>

				<figure className="effect absolute top-[25%] left-[0] z-20 aspect-[384/500] w-[110vw] max-w-[340px] md:top-[-13%] md:left-[35%] md:z-30 md:hidden md:aspect-[695/877] md:w-[60vw] md:max-w-[666px] lg:top-[-11%] lg:block lg:w-[50.5%]">
					<img
						src={
							smallScreen
								? "/images/effect-2.png"
								: "/images/effect.png"
						}
						alt=""
						className="undraggable h-full w-full object-contain"
					/>
				</figure>

				<figure className="absolute top-[15%] left-[6%] z-[800]   aspect-[407/782] max-w-[350px]  md:top-[7.5%] md:left-[43%] md:w-[30vw] md:max-w-[360px] xl:left-[40.5%] xl:aspect-[407/567] xl:w-[35%] xl:max-w-[700px]">
					<img
						src={
							mediumScreen
								? "/images/ministers.png"
								: "/images/ministers.png"
						}
						alt=""
						className="undraggable h-full w-full object-contain"
					/>
				</figure>

				<figure className="absolute bottom-[8%] left-[-30%] z-0 aspect-square w-[80vw] max-w-[500px] md:bottom-[13%] md:left-[-20%] md:z-30 md:hidden md:w-[60vw] lg:left-[-18%] lg:block xl:left-[-15%]">
					<img
						src="/images/Blur.png"
						alt=""
						className="undraggable h-full w-full object-contain"
					/>
				</figure>

				<figure className="absolute bottom-[-5%] z-30 hidden aspect-square w-[60vw] max-w-[500px] lg:bottom-[-7%] lg:right-[-18%] lg:block xl:right-[-15%]">
					<img
						src="/images/Blur2.png"
						alt=""
						className="undraggable h-full w-full object-contain"
					/>
				</figure>
			</header>

			{showMenu && (
				<div className="fixed top-0 left-0 z-[1000000] h-screen w-screen bg-black/70 px-5 py-16 text-[#131313]">
					<div
						className="absolute top-0 left-0 h-full w-full"
						onClick={toggleMenu}
					/>

					<a
						href="https://7airjukry19.typeform.com/RebootCamp2022"
						className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-5"
					>
						<span>Register & Book Accommodation</span>
						<Icon
							icon="akar-icons:arrow-right"
							className="text-2xl"
						/>
					</a>
				</div>
			)}
		</>
	);
};

export default Header;
