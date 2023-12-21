import { MTitle } from "../components/UI/title";
import { titleAnimation } from "../helpers/stylesHelpers";
import { useTranslation } from "react-i18next";
import PrinciplesList from "../components/principlesList";

const Principles = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-bg-main bg-principles bg-no-repeat bg-[center_top_-6rem] bg-contain z-10">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] relative h-full pb-7 xl:pb-[130px]">
        <MTitle variants={titleAnimation} initial="hidden" whileInView="visible">
          {t(`title.principles`)}
        </MTitle>

        <PrinciplesList />
        <div className="flex">
          <img src="/img/principles.png" alt="" className="w-100 h-auto" />
          <img src="/img/principles.png" alt="" className="w-100 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Principles;
