import { MTitle } from "../components/UI/title";
import SubTitle from "../components/UI/subTitle";
import { titleAnimation } from "../helpers/stylesHelpers";

import { useTranslation } from "react-i18next";
import PortfolioCardsSwiper from "../components/PortfolioCardsSwiper";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-bg-main z-10">
      <div
        className="h-[1094px] container mx-auto px-5 md:px-10 xl:px-[120px] pt-8 pb-4 xl:pb-14 relative portfolio"
        id="portfolio"
      >
        <MTitle variants={titleAnimation} initial="hidden" whileInView="visible" titleClass>
          {t(`title.portfolio`)}
        </MTitle>
        <SubTitle subTitleClass={"max-w-[452px] mb-[70px] xl:mb-1"}>{t(`subtitle.portfolio`)}</SubTitle>

        <PortfolioCardsSwiper />

        {/* circles */}
        {/* <div className="absolute top-[20px] right-[5%] mx-auto w-[310px] h-[310px]">
          <div className="hidden xl:inline-block  w-[309px] h-[309px] bg-gradient-to-b from-bg-green to-bg-blue rounded-full opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-md -z-10" />
          <div className="hidden xl:inline-block  w-[206px] h-[206px] bg-gradient-to-b from-bg-green to-bg-blue rounded-full opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-md -z-10" />
          <div className="hidden xl:inline-block  w-[143px] h-[143px] bg-gradient-to-b from-bg-green to-bg-blue rounded-full opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-md -z-10" />
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
