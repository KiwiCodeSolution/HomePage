import Menu from "./menu";
import logo from "../img/logo.png";
import * as icons from "../icons/iconComponent";
import { useState } from "react";
import LanguageBtns from "./languageBtns";
import SocialIconsList from "./socialIconsList";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <div className="container mx-auto">
      <div className="w-[370px] h-full relative">
        {isOpen ? (
          <div className="flex flex-col justify-between h-full pt-[120px] px-[70px] pb-10">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-6 right-3 cursor-pointer hover:shadow-menuIcon focus:shadow-menuIcon rounded-full p-2"
            >
              <icons.Close />
            </button>
            <Menu type={"mobile"} />
            <img src={logo} alt="Logo" className="w-[172px] h-[88px] mt-[150px] mx-auto mb-10" />
            <SocialIconsList type="mobile" />
          </div>
        ) : (
          <div className="flex justify-between items-center p-4">
            <img src={logo} alt="Logo" className="w-[120px] h-[60px]" />
            <div className="flex justify-between gap-x-5">
              <LanguageBtns />
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer hover:shadow-menuIcon focus:shadow-menuIcon rounded-full p-2"
              >
                <icons.Menu />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavMobile;
