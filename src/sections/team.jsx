import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SubTitle from "../components/UI/subTitle";
import { MTitle } from "../components/UI/title";
import items from "../data/team.json";

import "swiper/css";
import SwiperNavigations from "../components/swiperNavigations";
import TeamCard from "../components/teamCard";
import { titleAnimation } from "../helpers/stylesHelpers";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-bg-main z-10">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] pt-8 pb-4 xl:pb-[97px] relative">
        <MTitle variants={titleAnimation} initial="hidden" whileInView="visible">
          {t(`title.team`)}
        </MTitle>
        <SubTitle subTitleClass={"max-w-[520px] mb-6 xl:mb-10"}>{t(`subtitle.team`)}</SubTitle>

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
          }}
        >
          {items.map((el) => (
            <SwiperSlide key={el.id}>
              <TeamCard element={el} />
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperNavigations swipSection={"team"} swipClass={"w-full xl:w-1/4 mt-8"} />
      </div>
    </section>
  );
};

export default Team;
