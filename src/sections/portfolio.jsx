import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Left, Right } from "../icons/iconComponent";

import "swiper/css";

import Title from "../components/UI/title";
import items from "../data/portfolio.json";
import Button from "../components/UI/buttons";
import PortfolioCard from "../components/portfolioCard";

const Portfolio = () => {
  console.log(items);
  return (
    <section className="bg-bg-main z-10">
      <div className="container mx-auto px-10 md:px-20 xl:px-[120px] pt-8 relative">
        <Title>Portfolio</Title>
        <p className="w-[452px] text-2xl mb-10 mt-2">
          We present examples of work that has already been implemented by our team
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          rewind={true}
          // slidesPerView={4}
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

            1200: {
              slidesPerView: 4,
              // spaceBetween: 30,
            },
            1000: {
              slidesPerView: 3,
              // spaceBetween: 20,
            },
          }}
        >
          {items.map((el) => (
            <SwiperSlide key={el.id}>
              <PortfolioCard element={el} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-1/4 mt-8 relative ml-auto flex justify-center items-center">
          <Button btnStyle="swiperBtn" btnClass="portfolio-button-prev button-prev">
            <Left />
          </Button>
          <div className="portfolio-pagination flex justify-center gap-x-4 w-[90%] h-full " />
          <Button btnStyle="swiperBtn" btnClass="portfolio-button-next button-next">
            <Right />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
