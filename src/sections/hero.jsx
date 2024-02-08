/* eslint-disable react/style-prop-object */
// import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../components/UI/buttons";

import Overlay from "../components/UI/modal/overlay";
import ModalFormContact from "../components/UI/modal/modalFormContact";
import useScrollBlock from "../hooks/useScrollBlock";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  function openModal() {
    blockScroll();
    setIsOpen(true);
  }

  function closeModal(e) {
    allowScroll();
    setIsOpen(false);
  }
  const textAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.7 },
    },
  };

  return (
    <section className="container mx-auto md:pt-[120px] xl:pt-[90px] min-h-[85vh]">
      <div className="fixed w-[320px] md:w-full container mx-auto px-5 md:px-10 xl:px-[120px] top-20">
        <div className="sm:h-[480px] min-h-[500px] xl:h-[828px] bg-no-repeat xl:bg-right-top bg-contain mx-auto pt-14 xl:pt-20 hero">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            className="w-[280px] xl:w-[750px] text-[34px] xl:text-[64px] font-bold leading-[1.4] mb-14 xl:mb-8"
          >
            {t(`hero.0`)} <span className="accent">{t(`hero.1`)}</span> {t(`hero.2`)}
            <span className="accent"> {t(`hero.3`)}</span> {t(`hero.4`)}
          </motion.h1>
          <p className="text-base xl:text-2xl leading-[1.6] max-w-[280px] xl:w-[600px] mb-3 xl:mb-10 z-10">
            {t(`hero.5`)}
          </p>

          <Button btnStyle="startedBtn" clickFn={openModal} aria={"open pop-up button"}>
            {t(`buttons.0`)}
          </Button>
        </div>
      </div>
      {isOpen && (
        <Overlay clickFn={closeModal}>
          <ModalFormContact clickFn={closeModal} />
        </Overlay>
      )}
    </section>
  );
};

export default Hero;
