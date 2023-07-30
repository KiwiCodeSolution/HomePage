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
      className={`flex h-full ${
        type === "hero" ? "flex-col absolute bottom-0" : type === "footer" ? "flex-col" : "gap-x-4 mx-auto"
      }`}
    >
      {SOC_ITEMS.map(({ id, Icon, link }) => (
        <li key={id} className="rounded-full hover:shadow-socialIcon focus:shadow-socialIcon">
          <a href={link} className="cursor-pointern">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};
SocialIconsList.propTypes = {
  type: PropTypes.oneOf(["hero", "footer", "mobile"]).isRequired,
};
export default SocialIconsList;
