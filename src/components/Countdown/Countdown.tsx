import useCountdown from "../../hooks/useCountdown";

const Countdown = () => {
	const { timeLeft } = useCountdown("12/09/2022");

	return (
		<section className='mb-20 mt-10 w-full px-5 md:px-10 lg:mb-36 lg:mt-28'>
			<div className='grid w-full place-items-center gap-5 text-center'>
				<h2 className='font-quilon text-3xl font-medium text-primary-main lg:text-4xl'>
					Countdown With Us!
				</h2>

				<div className='mx-auto flex w-full  max-w-[900px] items-center justify-center divide-x divide-primary-main border-primary-main p-0 md:border-2 md:p-5 lg:p-10'>
					<div className='grid justify-items-center px-5 py-0 md:px-10'>
						<h1 className='-mt-3 font-quilon text-6xl text-primary-main/70 md:text-7xl lg:-mt-5 lg:font-semibold'>
							{timeLeft.days}
						</h1>
						<span className='-mt-3 text-lg text-primary-main/70 md:-mt-5'>
							Days
						</span>
					</div>

					<div className='grid justify-items-center px-5 py-0 md:px-10'>
						<h1 className='-mt-3 font-quilon text-6xl text-primary-main/70 md:text-7xl lg:-mt-5 lg:font-semibold'>
							{timeLeft.hours}
						</h1>
						<span className='-mt-3 text-lg text-primary-main/70 md:-mt-5'>
							Hours
						</span>
					</div>

					<div className='grid justify-items-center px-5 py-0 md:px-10'>
						<h1 className='-mt-3 font-quilon text-6xl text-primary-main/70 md:text-7xl lg:-mt-5 lg:font-semibold'>
							{timeLeft.minutes}
						</h1>
						<span className='-mt-3 text-lg text-primary-main/70 md:-mt-5'>
							Minutes
						</span>
					</div>

					<div className='hidden justify-items-center px-5 py-0 md:grid md:px-10'>
						<h1 className='-mt-3 font-quilon text-6xl text-primary-main/70 md:text-7xl lg:-mt-5 lg:font-semibold'>
							{timeLeft.seconds}
						</h1>
						<span className='-mt-3 text-lg text-primary-main/70 md:-mt-5'>
							Seconds
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Countdown;
