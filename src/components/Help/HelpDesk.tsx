import React from "react";

const HelpDesk = () => {
	return (
		<div className="w-full ">
			<h1 className="my-6 text-center text-3xl font-bold text-primary-main md:ml-auto lg:mb-16 ">
				Help Desk
			</h1>
			<div className="items-center justify-around md:flex">
				<div className="mb-6 h-[400px]  w-full bg-[#f2f2f2] py-8 px-10 text-black md:mb-0 md:w-[350px] lg:w-[650px] ">
					<div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-black opacity-100">
						<img src="/images/report.png" alt="report" />
					</div>
					<p className="mb-10 text-2xl ">Report a Missing Item</p>
					<p className="mb-10">
						This message will help you learn everything you need to
						cultivate daily healthy routines as a Christian, From.
					</p>
					<button className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-main py-3 px-7 font-medium text-white md:w-auto md:text-xl">
						<span>Report</span>
					</button>
				</div>
				<div className="h-[400px]  w-full bg-[#f2f2f2] py-8 px-10 text-black md:w-[350px] lg:w-[650px] ">
					<div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-black opacity-100">
						<img src="/images/hydra.png" alt="report" />
					</div>
					<p className="mb-10 text-2xl ">Navigate the Venue</p>
					<p className="mb-10">
						This message will help you learn everything you need to
						cultivate daily healthy routines as a Christian, From.
					</p>
					<a href="https://maps.app.goo.gl/pHkd6twDth3xs5aM7?g_st=ic">
						<button className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-main py-3 px-7 font-medium text-white md:w-auto md:text-xl">
							<span>Get Directions</span>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default HelpDesk;
