import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Quotes, TestimonialsCircleS, TestimonialsCircleM, TestimonialsCircleL } from "../icons/iconComponent";

import review from "../data/reviews.json";
import ResponseCard from "./responseCard";
import SwiperNavigations from "./swiperNavigations";

const TestimonialsSwiper = () => {
  return (
    <div className="w-[432px] min-h-[430px] mt-[157px] mb-[300px] py-11 px-[70px] rounded-[8px] border-[1px] border-bg-green border-opacity-[.2] bg-bg-grey mx-auto z-10 relative">
      <Quotes className={"absolute top-10 left-10"} />
      <TestimonialsCircleS className={"absolute top-[148px] left-3"} />
      <TestimonialsCircleM className={"absolute -top-5 -right-4"} />
      <TestimonialsCircleL className={"absolute -bottom-3 -right-2"} />

      <Swiper
        modules={[Navigation, Pagination]}
        rewind={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".testimonials-pagination",
        }}
        navigation={{
          nextEl: ".testimonials-button-next",
          prevEl: ".testimonials-button-prev",
        }}
      >
        {review.map((el) => (
          <SwiperSlide key={el.id}>
            <ResponseCard element={el} key={el.id} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperNavigations swipSection={"testimonials"} swipClass={"mt-5 w-[90%] mx-auto"} />
    </div>
  );
};

export default TestimonialsSwiper;
