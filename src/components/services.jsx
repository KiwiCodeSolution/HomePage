import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import * as icons from "../icons/iconComponent";
import Circle from "./UI/circle";
import { hoverAnimations } from "../helpers/stylesHelpers";

const SERVICES = [
  {
    id: "1",
    Icon: icons.Consultations,
  },
  {
    id: "2",
    Icon: icons.Software,
  },
  {
    id: "3",
    Icon: icons.Design,
  },
  {
    id: "4",
    Icon: icons.Application,
  },

  {
    id: "5",
    Icon: icons.Marketing,
  },

  {
    id: "6",
    Icon: icons.Forecasting,
  },
];

const ServiсesList = ({ type }) => {
  const { t, i18n } = useTranslation();

  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({ y: 0, opacity: 1, transition: { delay: custom * 0.2, duration: 0.5 } }),
  };

  return type === "about" ? (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-4 xl:gap-y-14 xl:grid-cols-3 md:gap-x-[30px] xl:gap-x-[90px] justify-between pt-5 mb-[60px] xl:mb-[76px] relative"
      id="services"
    >
      {SERVICES.map(({ id, Icon }) => (
        <motion.li
          key={id}
          className={`flex flex-col max-w-[354px]`}
          initial="hidden"
          whileInView="visible"
          custom={id}
          variants={textAnimation}
          // viewport={{ once: true }}
        >
          <Circle>
            <Icon className={"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"} />
          </Circle>
          <icons.Line />
          <div className="flex flex-col justify-between h-full">
            <p className="mt-1 mb-2 text-2xl font-medium leading-[1.4]">{t(`services.${id - 1}.title`)}</p>
            <p className="text-base leading-[1.4] opacity-[0.6] text-justify xl:text-left">
              {t(`services.${id - 1}.text`)}
            </p>
          </div>
        </motion.li>
      ))}
    </ul>
  ) : (
    <ul className="h-full grid grid-cols-1 xl:grid-cols-2 gap-y-1 place-content-between pb-2 overflow-hidden ">
      {SERVICES.map(({ id }) => (
        <li key={id} className="flex flex-col gap-y-[7px] text-xl font-medium w-fit overflow-hidden pb-1 relative ">
          <a href="#services" className={`cursor-pointer ${hoverAnimations}`}>
            {t(`services.${id - 1}.title`)}
          </a>
        </li>
      ))}
    </ul>
  );
};

ServiсesList.propTypes = {
  type: PropTypes.string,
};

export default ServiсesList;
