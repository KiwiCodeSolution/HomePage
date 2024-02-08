import NavDesktop from "../components/navDesktop";
import NavMobile from "../components/navMobile";

import useMatchMedia from "../hooks/useMediaQuery";

const Header = () => {
  const { isMobile } = useMatchMedia();
  return (
    <div className="container mx-auto">
      <header className="w-full z-30">{isMobile ? <NavMobile /> : <NavDesktop />}</header>
    </div>
  );
};

export default Header;
