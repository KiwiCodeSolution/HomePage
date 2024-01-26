import PropTypes from "prop-types";
// import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./UI/buttons";
import { Right } from "../icons/iconComponent";
import useScrollBlock from "../hooks/useScrollBlock";
import Overlay from "./UI/modal/overlay";
import PortfolioDetailInfoCard from "./UI/modal/portfolioDetailInfoCard";

const PortfolioCard = ({ element, onOpenModal, onCloseModal }) => {
  // const { t } = useTranslation();
  const [activeId, setAxpandedId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  function openModal() {
    onOpenModal();
    blockScroll();
    setIsOpen(true);
  }

  function closeModal(e) {
    onCloseModal();
    allowScroll();
    setIsOpen(false);
  }

  const textAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition: { delay: 0.1, duration: 0.7 },
    },
    visible: {
      scale: 1,
      opacity: 0.8,
      transition: { delay: 0.1, duration: 0.7 },
    },
  };

  return (
    <div className="py-5">
      <motion.div
        className="w-[416px] h-[368px] mx-auto rounded-3xl opacity-80 relative hover:opacity-100"
        onMouseEnter={() => setAxpandedId(element.id)}
        onMouseLeave={() => setAxpandedId(null)}
      >
        <img
          src={element.image}
          alt={element.alt}
          className="w-full h-[368px] rounded-3xl object-center object-cover"
        />
        <motion.div
          className="w-full min-h-[122px] rounded-2xl bg-slate-500 absolute bottom-0 py-4 px-2"
          initial="hidden"
          variants={textAnimation}
          animate={element.id === activeId ? "visible" : "hidden"}
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, excepturi voluptas porro sapiente eius
            vitae iste veniam voluptatum earum, laborum expedita? Ea modi, eveniet voluptas officiis in sequi. Quo,
            rerum!
          </p>
        </motion.div>
        <Button
          btnStyle="roundBtn"
          btnClass="absolute bottom-5 right-5 z-10"
          clickFn={openModal}
          aria={"open pop-up button"}
        >
          <Right className={"-rotate-45"} />
        </Button>
      </motion.div>

      {isOpen && (
        <Overlay clickFn={closeModal}>
          <PortfolioDetailInfoCard clickFn={closeModal} element={element} />
        </Overlay>
      )}
    </div>
  );
};

PortfolioCard.propTypes = {
  element: PropTypes.object.isRequired,
};

export default PortfolioCard;
