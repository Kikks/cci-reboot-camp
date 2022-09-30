import "./Gallery.css";
import { Dash } from "../../svg/dash";
import { Star1 } from "../../svg/star1";
import { Star2 } from "../../svg/star2";
import { Star4 } from "../../svg/star4";
import { Star3 } from "../../svg/star3";
// import { Play } from "../../svg/play";
import useMediaQuery from "../../hooks/useMediaQuery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const Gallery = () => {
	const bigScreen = useMediaQuery("(min-width: 768px)");
	const mediumScreen = useMediaQuery("(max-width: 1024px)");
	const [showBackArrow, setShowBackArrow] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (showModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}

		return () => {
			document.body.style.overflow = "visible";
		};
	}, [showModal]);

	const toggleShowModal = () => {
		setShowModal(prevState => !prevState);
	};

	const handleSlideRight = () => {
		const sliderContainer = document.getElementById(
			mediumScreen ? "images" : "slider-container"
		);

		if (sliderContainer) {
			sliderContainer.scrollLeft += 350;

			if (sliderContainer.scrollLeft === 0) {
				setShowBackArrow(false);
			} else if (!showBackArrow) {
				setShowBackArrow(true);
			}
		}
	};

	const handleSlideLeft = () => {
		const sliderContainer = document.getElementById(
			mediumScreen ? "images" : "slider-container"
		);

		if (sliderContainer) {
			sliderContainer.scrollLeft += -350;

			if (sliderContainer.scrollLeft === 0) {
				setShowBackArrow(false);
			} else if (!showBackArrow) {
				setShowBackArrow(true);
			}
		}
	};

	const handleImageclicked = (index: number) => {
		setSelectedIndex(index);
		toggleShowModal();
	};

	return (
		<>
			<section className='gallery-gradient'>
				<div className='relative flex items-center pt-4 md:py-4'>
					<span className='hidden md:relative md:left-[8%] md:block md:h-[50px] md:w-[40px]'>
						{Star4}
					</span>
					<span className='h-[28px] w-[22px] md:absolute md:left-[12%] md:top-[70%] md:h-[24px] md:w-[19px]'>
						{Star1}
					</span>
					<span className='absolute left-[8%] top-[10%] h-[34px] w-[26px] md:left-[15%] md:top-[15%] md:h-[86.28px] md:w-[67px]'>
						{Star2}
					</span>
					<span className='absolute right-[20%] h-[12px] w-[15px] md:h-[45px] md:w-[36px]'>
						{Star3}
					</span>
				</div>

				<div className='relative md:mx-auto md:w-max'>
					<h1 className='text-center font-quilon text-[2em] leading-10 text-white lg:text-5xl xl:text-[3.25em]'>
						The Reboot Camp{" "}
						<span className={`${bigScreen ? "inline" : "block"}`}>2021</span>
					</h1>
					<span
						className={`absolute ${bigScreen ? `right-[0]` : `right-[35%]`}`}
					>
						{Dash}
					</span>
					<span className='absolute right-[10%] bottom-0 block h-[35px] w-[28px] md:hidden'>
						{Star4}
					</span>
				</div>

				<div className='no-scrollbar relative mt-10 w-full overflow-x-hidden px-5 sm:mx-auto sm:max-w-[500px] lg:mx-auto lg:mt-12 lg:flex lg:max-w-[1500px] lg:items-center lg:gap-[1em] lg:px-7 xl:gap-[1.3em]'>
					<div
						id='slider-container'
						className='no-scrollbar flex w-full flex-col items-center gap-3 md:gap-5 lg:flex-row lg:overflow-x-auto'
					>
						<div className='relative'>
							<figure
								onClick={() => handleImageclicked(46)}
								className='block aspect-[589/504] min-h-[290px] w-full overflow-hidden rounded-xl bg-black/20 md:min-h-[390px] lg:min-h-0 lg:w-[41vw] lg:max-w-[560px]'
							>
								<LazyLoadImage
									src={
										mediumScreen
											? "/images/gallery/46-preview-small-screen.jpg"
											: "/images/gallery/46-preview-large-screen.jpg"
									}
									alt=''
									className='undraggable h-full w-full object-cover'
								/>
							</figure>
							{/* <span className='play hidden'>{Play}</span> */}
						</div>

						<div
							id='images'
							className={`grid-stack w-full place-items-center gap-3 md:gap-5 lg:w-auto ${
								mediumScreen ? "overflow-x-auto" : ""
							}`}
						>
							{Array.from(Array(46).keys()).map(number => (
								<figure
									onClick={() => handleImageclicked(number + 1)}
									key={number}
									className='aspect-square h-full w-[42vw] max-w-[180px] overflow-hidden rounded-xl bg-black/20 md:max-w-[220px] lg:w-[17vw] lg:max-w-[230px]'
								>
									<LazyLoadImage
										src={`/images/gallery/${number + 1}-preview.jpg`}
										alt=''
										className='undraggable h-full w-full object-cover'
									/>
								</figure>
							))}
						</div>
					</div>

					{showBackArrow && (
						<button
							onClick={handleSlideLeft}
							className='absolute top-[70%] left-3 grid h-10 w-10 place-items-center rounded-full border border-[#131313] bg-white md:h-14 md:w-14 lg:top-[50%] lg:-translate-y-[50%]'
						>
							<Icon
								icon='carbon:chevron-left'
								className='text-xl text-[#131313] lg:text-2xl'
							/>
						</button>
					)}

					<button
						onClick={handleSlideRight}
						className='absolute top-[70%] right-3 grid h-10 w-10 place-items-center rounded-full border border-[#131313] bg-white md:h-14 md:w-14 lg:top-[50%] lg:-translate-y-[50%]'
					>
						<Icon
							icon='carbon:chevron-right'
							className='text-xl text-[#131313] lg:text-2xl'
						/>
					</button>
				</div>
			</section>

			{showModal && (
				<div className='fixed top-0 left-0 z-[10000000] h-screen w-screen bg-black/80 '>
					<figure className='relative grid h-full w-full place-items-center'>
						<div
							className='absolute top-0 left-0 h-full w-full'
							onClick={toggleShowModal}
						/>

						<LazyLoadImage
							src={`/images/gallery/${selectedIndex}.jpg`}
							alt=''
							className='undraggable full-screen-image z-10'
						/>
					</figure>

					<button
						className='absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white lg:top-5 lg:right-10'
						onClick={toggleShowModal}
					>
						<Icon icon='carbon:close' className='text-xl text-red-500' />
					</button>
				</div>
			)}
		</>
	);
};

export default Gallery;
