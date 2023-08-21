import { useState } from "react";
import { motion } from "framer-motion";
import items from "../data/portfolio.json";

const PortfolioCards = () => {
  const [activeId, setAxpandedId] = useState("1");

  const cardAnimation = {
    expanded: {
      width: "450px",
    },
    collapsed: {
      width: "150px",
      transition: { duration: 0.5 },
    },
  };

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
    <ul className="flex justify-around h-[380px] gap-x-2">
      {items.map((el) => (
        <motion.li
          key={el.id}
          style={{ backgroundImage: `url(${el.urlImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
          className="flex flex-col justify-end rounded-[8px]"
          variants={cardAnimation}
          initial="collapsed"
          animate={el.id === activeId ? "expanded" : "collapsed"}
          onClick={() => setAxpandedId(el.id)}
          onMouseEnter={() => setAxpandedId(el.id)}
        >
          <motion.div
            className="flex flex-col gap-y-1 bg-slate-400 bg-opacity-80 rounded-[8px]"
            initial="hidden"
            variants={textAnimation}
            animate={el.id === activeId ? "visible" : "hidden"}
          >
            <h2 className="text-2xl text-center">{el.title}</h2>
            <h3 className="text-xl text-center">{el.text}</h3>
            <a href={el.urlProject} target="_blank" rel="noreferrer">
              <p className="text-lg text-center">Click to see more</p>
            </a>
          </motion.div>
        </motion.li>
      ))}
    </ul>
  );
};

export default PortfolioCards;
