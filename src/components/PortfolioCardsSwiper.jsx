import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import items from "../data/portfolio.json";
import PortfolioCard from "../components/portfolioCard";
import SwiperNavigations from "../components/swiperNavigations";
import "swiper/css";

const PortfolioCardsSwiper = () => {
  return (
    <div className="xl:hidden">
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
            spaceBetween: 5,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {items.map((el) => (
          <SwiperSlide key={el.id}>
            <PortfolioCard element={el} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperNavigations swipSection={"portfolio"} swipClass={"w-full xl:w-1/4 mt-8"} />
    </div>
  );
};

export default PortfolioCardsSwiper;
