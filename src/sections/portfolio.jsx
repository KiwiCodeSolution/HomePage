import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Title from "../components/UI/title";
import items from "../data/portfolio.json";

import PortfolioCard from "../components/portfolioCard";
import SubTitle from "../components/UI/subTitle";
import SwiperNavigations from "../components/swiperNavigations";

const Portfolio = () => {
  return (
    <section className="bg-bg-main z-10">
      <div className="container mx-auto px-5 md:px-20 xl:px-[120px] pt-8 pb-4 relative">
        <Title>Portfolio</Title>
        <SubTitle subTitleClass={"max-w-[452px] mb-6 xl:mb-10"}>
          We present examples of work that has already been implemented by our team.
        </SubTitle>

        <Swiper
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
        <SwiperNavigations swipSection={"portfolio"} swipClass={"w-full md:w-1/4 mt-8 mx-auto md:ml-auto"} />
      </div>
    </section>
  );
};

export default Portfolio;
