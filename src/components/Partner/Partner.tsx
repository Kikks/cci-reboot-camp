import "./partner.css";

const Partner = () => {
	return (
		<div className="experience-bg md:my-24 my-16 py-16 ">
            <div className="mx-auto  w-[80%] rounded-lg bg-white py-10 md:py-14  px-10 text-center shadow-md ">
                <h1 className=" pb-4 text-center text-3xl font-bold text-primary-main  md:ml-auto  ">
					{" "}
					Want To Partner With Us?
				</h1>
				<p className="mx-auto w-full md:w-[80%]">
					Please sign in to your account if you need help navigating
					the venue, finding routes or transportation to the venue,
					confirming your hotel booking or finding banks, ATMs or
					restaurants close to the venue.
				</p>
				<a href='https://ccing.org/rc-partner/' target="_blank" rel="noopener noreferrer">
					<div className="flex justify-center items-center my-5">
						<button className="flex w-full justify-center items-center gap-2 rounded-full bg-primary-main py-3 px-7 font-medium text-white md:w-auto md:text-xl">
							<span>Partner With us</span>
						</button>
					</div>
				</a>
                
			</div>
		</div>
	);
};

export default Partner;
