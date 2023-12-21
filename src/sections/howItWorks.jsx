import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MTitle } from "../components/UI/title";
import { blocAnimation, titleAnimation } from "../helpers/stylesHelpers";

const STEPS = [1, 2, 3, 4];

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-bg-main z-10">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] relative h-full pb-7 xl:pb-[60px]">
        <div className="grid grid-cols-1">
          <div className="flex flex-col relative order-2 md:order-1">
            <MTitle variants={titleAnimation} initial="hidden" whileInView="visible">
              {t(`title.how`)}
            </MTitle>

            <ul className="flex gap-x-6 flex-wrap mt-[40px] md:px-10 w-full">
              {STEPS.map((el) => (
                <motion.li
                  className={`w-full md:w-[270px] min-h-[322px] mb-5 xl:mb-0 xl:${
                    el === 2 || el === 4 ? "mt-[60px]" : "mt-0"
                  } relative rounded-b-lg`}
                  key={el}
                  initial="hidden"
                  whileInView="visible"
                  custom={el * 2}
                  variants={blocAnimation}
                  viewport={{ once: true }}
                >
                  <p className="h-[100px] px-3 text-2xl font-bold bg-gradient-to-b from-bg-green to-bg-blue text-txt-white rounded-tr-3xl flex justify-center items-center text-center">
                    {t(`how.${el - 1}.title`)}
                  </p>
                  <div className="w-full min-h-[218px] p-5 text-base how__bg">{t(`how.${el - 1}.text`)}</div>
                </motion.li>
              ))}
            </ul>
            {/* circles */}

            {/* <div className="hidden xl:inline-block absolute -top-[200px] -left-[225px] w-[430px] h-[430px] bg-bg-green rounded-full opacity-20 blur-[100px]" />
            <div className="hidden xl:inline-block absolute -top-[150px] -right-[180px] w-[530px] h-[530px] bg-bg-green rounded-full opacity-20 blur-[100px] -z-20" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
