import { motion } from "framer-motion";
import ServiсesList from "../components/services";

import { MTitle } from "../components/UI/title";
import { titleAnimation } from "../helpers/stylesHelpers";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const serviceAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.4, duration: 0.5 },
    }),
  };

  return (
    <section className="bg-bg-main bg-aboutWave bg-no-repeat bg-[center_top_-8rem] z-10">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] pb-12 md:pb-[64px] relative h-full" id="about">
        <div className="w-full h-20 -top-[75px] left-0 absolute gradient" />
        <ServiсesList type={"about"} />
        <div className="about bg-no-repeat bg-right-top min-h-[640px]">
          <MTitle variants={titleAnimation} initial="hidden" whileInView="visible">
            {t(`title.about`)}
          </MTitle>
          <motion.ul
            className="flex flex-col gap-y-6 w-[280px] xl:w-[514px] text-xl text-txt-grey mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <motion.li
              className="animate-right max-w-full text-justify xl:text-left"
              custom={1}
              variants={serviceAnimation}
            >
              {t("about_history")}
            </motion.li>
            <motion.li
              className="animate-right max-w-full text-justify xl:text-left"
              custom={2}
              variants={serviceAnimation}
            >
              {t("about_team")}
            </motion.li>
            <motion.li
              className="animate-right max-w-full text-justify xl:text-left"
              custom={3}
              variants={serviceAnimation}
            >
              {t("about_value")}
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default About;
