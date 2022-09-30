import "./Gallery.css";
import { Dash } from "../../svg/dash";
import { Star1 } from "../../svg/star1";
import { Star2 } from "../../svg/star2";
import { Star4 } from "../../svg/star4";
import { Star3 } from "../../svg/star3";
import { Play } from "../../svg/play";
import { ArrowRight } from "../../svg/arrowRight";
import useMediaQuery from "../../hooks/useMediaQuery";

const Gallery = () => {
  const bigScreen = useMediaQuery("(min-width: 768px)");

  return (
    <section className="gallery-gradient px-6 md:px-8">
      <div className="relative flex items-center pt-4 md:py-4">
        <span className="hidden md:relative md:left-[8%] md:block md:h-[50px] md:w-[40px]">
          {Star4}
        </span>
        <span className="h-[28px] w-[22px] md:absolute md:left-[12%] md:top-[70%] md:h-[24px] md:w-[19px]">
          {Star1}
        </span>
        <span className="absolute left-[8%] top-[10%] h-[34px] w-[26px] md:left-[15%] md:top-[15%] md:h-[86.28px] md:w-[67px]">
          {Star2}
        </span>
        <span className="absolute right-[20%] h-[12px] w-[15px] md:h-[45px] md:w-[36px]">
          {Star3}
        </span>
      </div>

      <div className="relative md:mx-auto md:w-max">
        <h1 className="text-center font-quilon text-[2em] leading-10 text-white lg:text-5xl xl:text-[3.25em]">
          The Reboot Camp <span className={`${bigScreen ? "inline" : "block"}`}>2022</span>
        </h1>
        <span className={`absolute ${bigScreen ? `right-[0]` : `right-[35%]`}`}>{Dash}</span>
        <span className="absolute right-[10%] bottom-0 block h-[35px] w-[28px] md:hidden">
          {Star4}
        </span>
      </div>

      <div className="mt-10 md:mx-auto md:max-w-[704px] md:px-16 lg:mx-auto lg:mt-12 lg:flex lg:max-w-[1376px] lg:items-center lg:gap-[1em] xl:gap-[1.3em]">
        <div className="relative">
          {bigScreen ? (
            <img
              src="/images/galleryBig1.png"
              alt="gallery1"
              className="block h-full w-full md:mb-[2em] lg:mb-0"
            />
          ) : (
            <img src="/images/gallery1.png" alt="gallery1" className="block h-full w-full" />
          )}
          <span className="play">{Play}</span>
        </div>

        <div className="grid-block">
          {bigScreen ? (
            <img src="/images/galleryBig2.png" alt="gallery2" className="block h-full w-full" />
          ) : (
            <img src="/images/gallery2.png" alt="gallery2" className="block h-full w-full" />
          )}

          <div className="relative">
            {bigScreen ? (
              <img src="/images/galleryBig3.png" alt="gallery3" className="block h-full w-full" />
            ) : (
              <img src="/images/gallery3.png" alt="gallery3" className="block h-full w-full" />
            )}

            <span
              className={`${
                bigScreen ? `top-[95%]` : `top-[90%]`
              } absolute -right-[10px] lg:hidden`}
            >
              {ArrowRight}
            </span>
          </div>

          <div className="relative">
            {bigScreen ? (
              <img src="/images/galleryBig4.png" alt="gallery4" className="block h-full w-full" />
            ) : (
              <img src="/images/gallery4.png" alt="gallery4" className="block h-full w-full" />
            )}

            <span className="absolute top-[95%] -right-[10px] hidden lg:block">{ArrowRight}</span>
          </div>

          {bigScreen ? (
            <img src="/images/galleryBig5.png" alt="gallery5" className="block h-full w-full" />
          ) : (
            <img src="/images/gallery5.png" alt="gallery5" className="block h-full w-full" />
          )}

          {bigScreen && (
            <>
              <img src="/images/galleryBig6.png" alt="gallery6" className="block h-full w-full" />
              <img src="/images/galleryBig7.png" alt="gallery7" className="block h-full w-full" />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
