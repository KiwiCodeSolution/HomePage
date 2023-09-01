import { useTranslation } from "react-i18next";
import SubTitle from "../components/UI/subTitle";
import { MTitle } from "../components/UI/title";
import ContactForm from "../components/contactForm";
import TableItem from "../components/tableItem";
import { titleAnimation } from "../helpers/stylesHelpers";

const ITEMS = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

const Consultation = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-bg-main z-10">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] pt-8 pb-[100px] md:pb-4 xl:pb-[100px] relative">
        <MTitle variants={titleAnimation} initial="hidden" whileInView="visible">
          {t(`title.consultation`)}
        </MTitle>
        <SubTitle subTitleClass={"max-w-[452px] uppercase mb-8"}>{t(`subtitle.consultation`)}</SubTitle>
        <ul className="w-[280px] h-full md:w-[690px] xl:w-[866px] md:h-[234px] grid grid-cols-1 md:grid-cols-2 border-[0.5px] border-bg-green border-opacity-[.4] mb-6 xl:mb-[108px] ">
          {ITEMS.map((el) => (
            <TableItem id={el.id} key={el.id} />
          ))}
        </ul>
        <div className="w-full relative">
          <img
            src="/img/girl-1.png"
            alt="girl"
            className="hidden xl:inline w-[500px] h-[500px] absolute bottom-[76px] right-0 object-contain"
          />
          <ContactForm section="consultation" />
        </div>
        {/* circles */}
        <div className="hidden xl:inline-block absolute top-0 right-[5%] w-[430px] h-[430px] bg-bg-green rounded-full opacity-20 blur-[100px] -z-20" />
      </div>
    </section>
  );
};

export default Consultation;
