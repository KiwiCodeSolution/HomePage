import { useTranslation } from "react-i18next";
import { MTitle } from "../components/UI/title";
import { titleAnimation } from "../helpers/stylesHelpers";
import SliderHowWeWorks from "../components/sliderHowWeWorks";

const HowWeWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-bg-main z-10 how">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] relative pb-7 xl:pb-[60px] h-[900px] md:h-full">
        <MTitle variants={titleAnimation} initial="hidden" whileInView="visible" titleClass={"mb-8"}>
          {t(`title.how`)}
        </MTitle>

        <SliderHowWeWorks />
        {/* circles */}

        {/* <div className="hidden xl:inline-block absolute -top-[200px] -left-[225px] w-[430px] h-[430px] bg-bg-green rounded-full opacity-20 blur-[100px]" />
            <div className="hidden xl:inline-block absolute -top-[150px] -right-[180px] w-[530px] h-[530px] bg-bg-green rounded-full opacity-20 blur-[100px] -z-20" /> */}
      </div>
    </section>
  );
};

export default HowWeWorks;
