import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SubTitle from "../components/UI/subTitle";
import Title from "../components/UI/title";
import items from "../data/team.json";

import "swiper/css";
import SwiperNavigations from "../components/swiperNavigations";
import TeamCard from "../components/teamCard";

const Team = () => {
  return (
    <section className="bg-bg-main z-10">
      <div className="container mx-auto px-10 md:px-20 xl:px-[120px] pt-8 pb-[97px] relative">
        <Title>Our Team</Title>
        <SubTitle subTitleClass={"w-[520px] mb-10 "}>
          Our team offers a full range of layout development services to testing the finished proposal.
        </SubTitle>

        <Swiper
          modules={[Navigation, Pagination]}
          rewind={true}
          pagination={{
            clickable: true,
            el: ".team-pagination",
          }}
          navigation={{
            nextEl: ".team-button-next",
            prevEl: ".team-button-prev",
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
            // 1400: {
            //   slidesPerView: 5,
            // },
          }}
        >
          {items.map((el) => (
            <SwiperSlide key={el.id}>
              <TeamCard element={el} />
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperNavigations swipSection={"team"} swipClass={"w-1/4 mt-8 ml-auto"} />
      </div>
    </section>
  );
};

export default Team;
