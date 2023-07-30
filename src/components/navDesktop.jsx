import Menu from "./menu";
import logo from "../img/logo.png";

const NavDesktop = () => {
  return (
    <div className="flex fixed top-3 w-[1280px]">
      <img src={logo} alt="Logo" className="w-[172px] h-[88px] ml-10" />
      <Menu type={"header"} />
    </div>
  );
};

export default NavDesktop;
