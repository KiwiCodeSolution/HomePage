import Menu from "./menu";
import logo from "../img/logo.png";

const NavDesktop = () => {
  return (
    <div className=" md:px-20 xl:px-[120px] flex fixed top-3 container justify-between">
      <img src={logo} alt="Logo" className="w-[172px] h-[88px]" />
      <Menu type={"header"} />
    </div>
  );
};

export default NavDesktop;
