import Button from "../components/UI/buttons";
import Logo from "../components/UI/logo";
import ContactList from "../components/contactList";
import ServiсesList from "../components/services";
import { useTranslation } from "react-i18next";
import SocialIconsList from "../components/socialIconsList";
import { scrollTo } from "../helpers/scrollFunctions";

import { Up } from "../icons/iconComponent";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-bg-main bg-footer bg-no-repeat bg-cover z-10 relative">
      <div className="w-full h-20 -top-[15px] left-0 absolute gradient__footer" />
      <div
        className="container min-h-[440px] px-5 md:px-10 xl:px-[120px] pt-20 pb-[84px] md:pb-[134px] mx-auto relative"
        id="contacts"
      >
        <ul className="flex flex-wrap xl:flex-nowrap gap-y-6 xl:gap-y-0 gap-x-[100px]">
          <li className="-mt-[10px]">
            <Logo />
            {/* <SocialIconsList type={"footer"} /> */}
          </li>
          <li className="flex flex-col w-[550px]">
            <span className="text-2xl mb-3">{t(`footer.0`)}</span>
            <ServiсesList />
          </li>
          <li className="flex flex-col">
            <span className="text-2xl mb-3">{t(`footer.1`)}</span>
            <ContactList />
          </li>
        </ul>
        <Button
          btnStyle="roundBtn"
          btnClass={"absolute top-[150px] xl:top-[128px] right-2 md:right-7 xl:right-0"}
          clickFn={() => scrollTo(0)}
          aria={"go up button"}
        >
          <Up />
        </Button>
      </div>
    </section>
  );
};

export default Footer;
