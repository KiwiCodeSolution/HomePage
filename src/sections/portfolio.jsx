// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import items from "../data/portfolio.json";
// import PortfolioCard from "../components/portfolioCard";
// import SwiperNavigations from "../components/swiperNavigations";
// import "swiper/css";

import { MTitle } from "../components/UI/title";
import SubTitle from "../components/UI/subTitle";
import { titleAnimation } from "../helpers/stylesHelpers";
import PortfolioCards from "../components/portfolioCards";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-bg-main z-10">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] pt-8 pb-4 xl:pb-14 relative" id="portfolio">
        <MTitle variants={titleAnimation} initial="hidden" whileInView="visible">
          {t(`title.portfolio`)}
        </MTitle>
        <SubTitle subTitleClass={"max-w-[452px] mb-6 xl:mb-10"}>{t(`subtitle.portfolio`)}</SubTitle>

        <PortfolioCards />

        {/* <Swiper
          modules={[Navigation, Pagination]}
          rewind={true}
          pagination={{
            clickable: true,
            el: ".portfolio-pagination",
          }}
          navigation={{
            nextEl: ".portfolio-button-next",
            prevEl: ".portfolio-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            639: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {items.map((el) => (
            <SwiperSlide key={el.id}>
              <PortfolioCard element={el} />
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperNavigations swipSection={"portfolio"} swipClass={"w-full xl:w-1/4 mt-8"} /> */}

        {/* circles */}
        <div className="absolute top-[20px] right-[5%] mx-auto w-[310px] h-[310px]">
          <div className="hidden xl:inline-block  w-[309px] h-[309px] bg-gradient-to-b from-bg-green to-bg-blue rounded-full opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-md -z-10" />
          <div className="hidden xl:inline-block  w-[206px] h-[206px] bg-gradient-to-b from-bg-green to-bg-blue rounded-full opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-md -z-10" />
          <div className="hidden xl:inline-block  w-[143px] h-[143px] bg-gradient-to-b from-bg-green to-bg-blue rounded-full opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-md -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
