import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <section className="mt-[70px] border-t border-[#131313]">
        <div className=" my-[50px] grid justify-items-center px-[20px] sm:flex sm:justify-between">
          <div className="pt-[10px]">Copyright © 2022 CCI Reboot Camp</div>
          <div className="mt-[15px] flex w-[250px] justify-between sm:mt-0">
            <a href="https://web.facebook.com/CelebrationChurchIntl/">
              <Icon icon="bxl:facebook" className="text-5xl text-[#131313]" />
            </a>
            <a href="https://instagram.com/cci_therebootcamp?igshid=YmMyMTA2M2Y=">
              <Icon icon="ci:instagram" className="text-5xl text-[#131313]" />
            </a>
            <a href="https://twitter.com/cci__global">
              <Icon icon="bxl:twitter" className="text-5xl text-[#131313]" />
            </a>
            <a href="https://www.youtube.com/c/CelebrationChurchNG">
              <Icon icon="bxl:youtube" className="text-5xl text-[#131313]" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
