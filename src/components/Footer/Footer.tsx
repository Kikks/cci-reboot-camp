import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <section className="mt-[70px] border-t border-[#131313]">
        <div className=" grid justify-items-center my-[50px] sm:flex sm:justify-between px-[20px]">
          <div>Copyright © 2022 CCI Reboot Camp</div>
          <div className="flex w-[150px] justify-between mt-[15px] sm:mt-0">
            <Icon icon="bxl:facebook" className="text-4xl text-[#131313]" />
            <Icon icon="ci:instagram" className="text-4xl text-[#131313]" />
            <Icon icon="bxl:twitter" className="text-4xl text-[#131313]" />
            <Icon icon="bxl:youtube" className="text-4xl text-[#131313]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
