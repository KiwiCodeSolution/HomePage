/* eslint-disable react/style-prop-object */
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import Button from "../components/UI/buttons";
import IndicatorsList from "../components/indicators";
import Overlay from "../components/UI/modal/overlay";
import ModalFormContact from "../components/UI/modal/modalFormContact";
import useScrollBlock from "../hooks/useScrollBlock";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  // useEffect(() => {
  //   function keyDown(e) {
  //     if (e.code !== "Escape") {
  //       return;
  //     }
  //     allowScroll();
  //     setIsOpen(false);
  //   }
  //   window.addEventListener("keydown", keyDown);
  //   return () => {
  //     window.removeEventListener("keydown", keyDown);
  //   };
  // }, [allowScroll]);

  // function handleOverlayClick(e) {
  //   if (e.target === e.currentTarget) {
  //     closeModal();
  //   }
  //   return;
  // }

  function openModal() {
    blockScroll();
    setIsOpen(true);
  }

  function closeModal(e) {
    allowScroll();
    setIsOpen(false);
  }

  return (
    <section className="container mx-auto md:pt-[120px] xl:pt-[90px] min-h-[85vh]">
      <div className="fixed w-[320px] md:w-full container mx-auto px-5 md:px-10 xl:px-[120px] top-20">
        <div className="sm:h-[480px] min-h-[500px] xl:h-[828px] bg-no-repeat xl:bg-right-top bg-contain mx-auto pt-14 hero">
          <h1 className="w-[311px] xl:w-[704px] text-[34px] xl:text-[64px] font-bold leading-[1.4] mb-14 xl:mb-4">
            Full cycle <span className="accent">development</span> and
            <span className="accent"> support</span> of your sites
          </h1>
          <p className="text-base xl:text-2xl leading-[1.6] w-[301px] xl:w-[452px] mb-3 z-10">
            More than <CountUp end={5} />+ ears of experience that helps build effective process.
          </p>
          <IndicatorsList />
          <Button btnStyle="startedBtn" clickFn={openModal} aria={"open pop-up button"}>
            Get started
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
