import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import * as icons from "../icons/iconComponent";
import Circle from "./UI/circle";

const SERVICES = [
  {
    id: "1",
    Icon: icons.Design,
  },
  {
    id: "2",
    Icon: icons.Marketing,
  },
  {
    id: "3",
    Icon: icons.Application,
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
      className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-4 xl:gap-y-0 xl:grid-cols-3 md:gap-x-[30px] xl:gap-x-[90px] justify-between mb-[60px] xl:mb-[76px] relative"
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
          viewport={{ once: true }}
        >
          <Circle>
            <Icon className={"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"} />
          </Circle>
          <icons.Line />
          <p className="mt-1 mb-2 text-2xl font-medium leading-[1.4]">{t(`services.${id - 1}.title`)}</p>
          <p className="text-base leading-[1.4] opacity-[0.6] text-justify xl:text-left">
            {t(`services.${id - 1}.text`)}
          </p>
        </motion.li>
      ))}
    </ul>
  ) : (
    <ul className="flex flex-col gap-y-4 max-w-[245px]">
      {SERVICES.map(({ id, title }) => (
        <li key={id} className="text-2xl font-medium">
          {t(`services.${id - 1}.title`)}
        </li>
      ))}
    </ul>
  );
};

ServiсesList.propTypes = {
  type: PropTypes.string,
};

export default ServiсesList;
