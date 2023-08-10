import * as icons from "../icons/iconComponent";
import PropTypes from "prop-types";

const SOC_ITEMS = [
  { id: "git", Icon: icons.Git, link: "#" },
  { id: "tg", Icon: icons.Tg, link: "#" },
  { id: "inst", Icon: icons.Inst, link: "#" },
  { id: "linkId", Icon: icons.LinkId, link: "#" },
];

const SocialIconsList = ({ type }) => {
  return (
    <ul
      className={`h-full ${
        type === "allSite"
          ? "hidden xl:flex flex-col gap-y-5 fixed top-1/2 left-[5%] -translate-y-1/4 z-20"
          : type === "footer"
          ? "flex flex-row gap-x-6 mx-auto"
          : "flex gap-x-4 mx-auto"
      }`}
    >
      {SOC_ITEMS.map(({ id, Icon, link }) => (
        <li key={id} className="rounded-full">
          <a href={link} className="cursor-pointern rounded-full hover:shadow-socialIcon focus:shadow-socialIcon">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};
SocialIconsList.propTypes = {
  type: PropTypes.oneOf(["allSite", "footer", "mobile"]).isRequired,
};
export default SocialIconsList;
