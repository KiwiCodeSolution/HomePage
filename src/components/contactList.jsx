import { useTranslation } from "react-i18next";
import { hoverAnimations } from "../helpers/stylesHelpers";
import { Mail, Place, Tell } from "../icons/iconComponent";

const ContactList = () => {
  const { t } = useTranslation();
  return (
    <ul className="flex flex-col gap-y-3 justify-between w-[280px] xl:w-[310px]">
      <li className="flex gap-x-3 w-fit relative overflow-hidden pb-1 items-start">
        <Tell />
        <a href="tel:+380971718829" className={`text-base opacity-[.6] ${hoverAnimations}`}>
          +38 097 171 88 29
        </a>
      </li>
      <li className="flex gap-x-3 w-fit relative overflow-hidden pb-1 items-start">
        <Mail />
        <a href="email:support@kiwicode.tech" className={`text-base opacity-[.6] ${hoverAnimations}`}>
          support@kiwicode.tech
        </a>
      </li>
      <li className="flex gap-x-3 relative overflow-hidden pb-1 items-start">
        <Place />
        <address className="not-italic text-base opacity-[.6]">{t(`adress.1`)}</address>
      </li>
    </ul>
  );
};

export default ContactList;
