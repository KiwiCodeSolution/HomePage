import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";

const PortfolioCard = ({ element }) => {
  const [activeId, setAxpandedId] = useState("1");
  console.log(activeId);

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
          src={element.urlImage}
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
        <button className="rounded-full absolute bottom-5 right-5 w-8 h-8 bg-red-700 z-10">cklik me</button>
      </motion.div>
    </div>
  );
};

PortfolioCard.propTypes = {
  element: PropTypes.object.isRequired,
};

export default PortfolioCard;
