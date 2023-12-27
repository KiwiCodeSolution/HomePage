import { useTranslation } from "react-i18next";
import { MTitle } from "../components/UI/title";
import { titleAnimation } from "../helpers/stylesHelpers";
import AsNavFor from "./slider";

const HowWeWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-bg-main z-10 how">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] relative h-full pb-7 xl:pb-[60px]">
        <div className="grid grid-cols-1">
          <div className="flex flex-col relative order-2 md:order-1">
            <MTitle variants={titleAnimation} initial="hidden" whileInView="visible" titleClass={"mb-8"}>
              {t(`title.how`)}
            </MTitle>

            <AsNavFor />
            {/* circles */}

            {/* <div className="hidden xl:inline-block absolute -top-[200px] -left-[225px] w-[430px] h-[430px] bg-bg-green rounded-full opacity-20 blur-[100px]" />
            <div className="hidden xl:inline-block absolute -top-[150px] -right-[180px] w-[530px] h-[530px] bg-bg-green rounded-full opacity-20 blur-[100px] -z-20" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorks;
