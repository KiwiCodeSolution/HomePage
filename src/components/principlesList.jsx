import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import * as icons from "../icons/iconComponent";
import Circle from "./UI/circle";

const PRINCIPLES = [
  {
    id: "1",
    Icon: icons.Expertise,
  },
  {
    id: "2",
    Icon: icons.Approach,
  },
  {
    id: "3",
    Icon: icons.Watch,
  },
  {
    id: "4",
    Icon: icons.Partnership,
  },
];

const PrinciplesList = () => {
  const { t } = useTranslation();

  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({ y: 0, opacity: 1, transition: { delay: custom * 0.2, duration: 0.5 } }),
  };

  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-4 xl:gap-y-0 xl:grid-cols-4 md:gap-x-4 xl:gap-x-6 justify-between mb-[60px] xl:mt-[56px] xl:mb-[76px] relative"
      id="зrinciples"
    >
      {PRINCIPLES.map(({ id, Icon }) => (
        <motion.li
          key={id}
          className={`flex flex-col w-[306px] h-[422px] py-4 px-[5px] gap-y-5 principles_card`}
          initial="hidden"
          whileInView="visible"
          custom={id}
          variants={textAnimation}
          viewport={{ once: true }}
        >
          <Circle section="pinciples">
            <Icon className={"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"} />
          </Circle>

          <div className="flex flex-col h-full px-5 gap-y-5 ">
            <h4 className="text-[22px] font-bold leading-[1.4]">{t(`pinciples.${id - 1}.title`)}</h4>
            <icons.Line opacity={0.2} />
            <p className="text-base leading-[1.4] text-justify xl:text-left text-txt-grey">
              {t(`pinciples.${id - 1}.text`)}
            </p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default PrinciplesList;
