import PropTypes from "prop-types";

import * as icons from "../icons/iconComponent";
import Circle from "./UI/circle";

const SERVICES = [
  {
    id: "1",
    Icon: icons.Design,
    title: "UI / UX Design",
    text: " The process of developing UI/UX design for websites includes analyzing the target audience and their needs, creating ideas and design concepts, developing prototypes and testing them for user experience, as well as  defining the color palette, fonts, and other design elements.",
    animation: "animate-[up_0.7s_ease-in-out]",
  },
  {
    id: "2",
    Icon: icons.Marketing,
    title: "Omnichannel Marketing",
    text: " Omnichannel marketing is a marketing strategy that involves using various communication channels withcustomers, such as email, social media, mobile apps, SMS messages, and others, to create a seamless and consistent experience of interacting with a brand regardless of the customer's chosen communication channel.",
    animation: "animate-[up_1.2s_ease-in-out]",
  },
  {
    id: "3",
    Icon: icons.Application,
    title: "Desktop Application Development",
    text: "Desktop application development is the process of creating software to run on personal computers, which are installed and executed without internet access, and can have various functionalities ranging from processing text and tables to advanced graphical capabilities and use of databases.",
    animation: "animate-[up_1.7s_ease-in-out]",
  },
];

const ServiсesList = ({ type }) => {
  return type === "about" ? (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-4 xl:gap-y-0 xl:grid-cols-3 md:gap-x-[30px] xl:gap-x-[90px] justify-between mb-[60px] xl:mb-[76px] relative"
      id="services"
    >
      {SERVICES.map(({ id, Icon, title, text, animation }) => (
        <li key={id} className={`flex flex-col max-w-[354px] ${animation} `}>
          <Circle>
            <Icon className={"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"} />
          </Circle>
          <icons.Line />
          <p className="mt-1 mb-2 text-2xl font-medium leading-[1.4]">{title}</p>
          <p className="text-base leading-[1.4] opacity-[0.6] text-justify">{text}</p>
        </li>
      ))}
    </ul>
  ) : (
    <ul className="flex flex-col gap-y-4 max-w-[245px]">
      {SERVICES.map(({ id, title }) => (
        <li key={id} className="text-2xl font-medium">
          {title}
        </li>
      ))}
    </ul>
  );
};

ServiсesList.propTypes = {
  type: PropTypes.string,
};

export default ServiсesList;
