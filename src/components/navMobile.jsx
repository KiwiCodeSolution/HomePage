import Menu from "./menu";
import logo from "../img/logo.png";
import * as icons from "../icons/iconComponent";
import { useState } from "react";
import LanguageBtns from "./languageBtns";
import SocialIconsList from "./socialIconsList";
import Overlay from "./UI/modal/overlay";
import useScrollBlock from "../hooks/useScrollBlock";
import Button from "./UI/buttons";
import Logo from "./UI/logo";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [blockScroll, allowScroll] = useScrollBlock();

  function openModal() {
    blockScroll();
    setIsOpen(true);
  }

  function closeModal() {
    allowScroll();
    setIsOpen(false);
  }

  return (
    <div className="w-[320px] h-full fixed top-2">
      {isOpen ? (
        <Overlay>
          <div className="bg-bg-main flex flex-col justify-between h-full pt-[120px] px-[70px] pb-10">
            <Button type="button" btnStyle="closeBtn" clickFn={closeModal} aria={"close button"}>
              <icons.Close />
            </Button>
            <Menu type={"mobile"} clickFn={closeModal} />
            <Logo />
            <SocialIconsList type="mobile" />
          </div>
        </Overlay>
      ) : (
        <div className="flex justify-between items-center p-4">
          <img src={logo} alt="Logo" className="w-[120px] h-[69px]" />
          <div className="flex justify-between gap-x-5">
            <LanguageBtns />
            <button
              type="button"
              onClick={openModal}
              className="cursor-pointer hover:shadow-menuIcon focus:shadow-menuIcon rounded-full p-2"
              aria-label="menu button"
            >
              <icons.Menu />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
