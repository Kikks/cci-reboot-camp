import "./Experience.css";
const Experience = () => {
  return (
    <>
      <section className="experience-bg relative w-full p-[30px] sm:p-[100px] ">
        <div className="rounded-xl bg-[#FFF] p-[25px] sm:p-[100px]">
          <div className="mb-10">
            <h1 className="experience-title text-[40px] sm:text-[70px]">
              The Rich Experience
            </h1>
          </div>
          <div className="grid md:flex md:justify-between">
            <div className="w-100% sm-w-[25%] mt-5 flex">
              <img
                className="relative top-2 h-[30px] w-[30px]"
                src="/icons/refresh.svg"
                alt=""
              />
              <div className="flex flex-col pl-[10px]">
                <h1 className="text-3xl font-bold text-[#21409A]">
                  Rejuvenation
                </h1>
                <p className="max-w-[350px] text-xl">
                  The reboot camp is that camp meeting you need to get your
                  prayer life back on track, wax stronger in fervor and
                  revitalize your spiritual devotion to the way it ought to be.
                </p>
              </div>
            </div>

            <div className="w-100% sm-w-[25%] mt-5 flex">
              <img
                className=" relative top-2 h-[30px] w-[30px]"
                src="/icons/bible.svg"
                alt=""
              />
              <div className="flex flex-col pl-[10px]">
                <h1 className="text-3xl font-bold text-[#F36F21]">
                  Indoctrination
                </h1>
                <p className="max-w-[350px] text-xl">
                  The word of God is the ultimate standard for doctrine that
                  should instruct us in the way of righteousness. The undiluted
                  word of God will be taught with precision and accuracy.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid justify-between md:flex">
            <div className="w-100% sm-w-[25%] mt-5 flex">
              <img
                className="relative top-2 h-[30px] w-[30px]"
                src="/icons/confetti-fill.svg"
                alt=""
              />
              <div className="flex flex-col pl-[10px]">
                <h1 className="text-3xl font-bold text-[#ED1C24]">
                  Celebration
                </h1>
                <p className="max-w-[350px] text-xl">
                  The reboot camp is that camp meeting you need to get your
                  prayer life back on track, wax stronger in fervor and
                  revitalize your spiritual devotion to the way it ought to be.
                </p>
              </div>
            </div>

            <div className="w-100% sm-w-[25%] mt-5 flex">
              <img
                className=" relative top-2 h-[30px] w-[30px]"
                src="/icons/people.svg"
                alt=""
              />
              <div className="flex flex-col pl-[10px]">
                <h1 className="text-3xl font-bold text-[#2ABAA7]">
                  Harvest of souls
                </h1>
                <p className="max-w-[350px] text-xl">
                  The word of God is the ultimate standard for doctrine that
                  should instruct us in the way of righteousness. The undiluted
                  word of God will be taught with precision and accuracy.
                </p>
              </div>
            </div>
          </div>
          <img
            className="absolute hidden top-[250px] left-[25px] sm:block sm:left-[94px]"
            src="/images/curly_1.png"
            alt=""
          />
          <img
            className="absolute bottom-[200px] right-[90px]"
            src="/images/curly_2.png"
            alt=""
          />
          <img
            className="absolute block top-[250px] left-[25px] sm:hidden sm:left-[94px]"
            src="/images/curly_3.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Experience;
