import Menu from "./menu";
import Logo from "./UI/logo";

const NavDesktop = () => {
  return (
    <div className=" md:px-20 xl:px-[120px] flex fixed top-3 container justify-between">
      <Logo />
      <Menu type={"header"} />
    </div>
  );
};

export default NavDesktop;
