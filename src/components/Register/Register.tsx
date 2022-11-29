import "./Register.css";
import { Icon } from "@iconify/react";
import { CurvedArrow } from "../../svg/curvedArrow";
import { Star6 } from "../../svg/star6";
import { Star5 } from "../../svg/star5";
import { CurvedArrowBig } from "../../svg/curvedArrowBig";

const Register = () => {
	return (
		<section className='md:py-16'>
			<div className='relative mt-8 md:hidden'>
				<img src='/images/ellipse3.png' alt='ellipse' />
				<span>{CurvedArrow}</span>
			</div>

			<div className='md:mx-auto md:w-[80%]'>
				<div className='relative hidden justify-end md:flex'>
					<img src='/images/ellipse3Big.png' alt='ellipse' />
					<span className='absolute'>{CurvedArrowBig}</span>
				</div>
				<h1 className='text-gradient mb-2 text-center font-quilon text-[2em] lg:text-5xl xl:text-[3.25em]'>
					Register To Attend
				</h1>
				<div className='px-6 pb-12 text-center md:pb-0'>
					<div className='text-[1em] md:mx-auto md:text-[1.25em]'>
						<p>
							You deserve the best experience at the Global Reboot Camp 2022 and
							for that reason we have decided to give you the opportunity to
							both register for the camp meeting as well as book your
							accommodation.
						</p>
						<div className='relative -mx-6 flex items-center py-4 md:hidden'>
							<span className='absolute right-[7%] h-[23px] w-[18px]'>
								{Star5}
							</span>
							<span className='absolute right-0 mb-8 h-[39px] w-[31px]'>
								{Star6}
							</span>
						</div>
						
					</div>

					<div className='flex items-center justify-center'>
						<a
							href='https://rebootcamp2022.typeform.com/RebootCamp2022'
							className='inline'
						>
							<button className='mt-6 flex w-full items-center justify-center rounded-full bg-primary-main py-3 px-7 text-[18px] font-medium text-white md:mx-auto md:w-auto md:text-[20px] lg:text-[28px]'>
								<span>Register & Book Accomodation</span>
								<Icon
									icon='akar-icons:arrow-right'
									className='ml-2 text-xl md:text-3xl'
								/>
							</button>
						</a>
					</div>

					<div className='relative hidden py-8 md:block'>
						<span className='absolute left-[5%] -top-[20%] h-[39px] w-[31px] md:h-[86px] md:w-[67px]'>
							{Star6}
						</span>
						<span className='absolute left-0 h-[23px] w-[18px] md:h-[50px] md:w-[40px]'>
							{Star5}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
