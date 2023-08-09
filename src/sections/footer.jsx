import Logo from "../components/UI/logo";
import ContactList from "../components/contactList";
import ServiсesList from "../components/services";
import SocialIconsList from "../components/socialIconsList";

const Footer = () => {
  return (
    <section className="bg-bg-main bg-footer bg-no-repeat bg-cover z-10 relative">
      <div className="w-full h-20 -top-[15px] left-0 absolute gradient__footer" />
      <div className="container h-[440px] px-10 md:px-20 xl:px-[120px] pt-32 pb-[134p] mx-auto relative">
        <ul className="flex justify-between">
          <li className="flex flex-col gap-y-10 mr-[134px]">
            <Logo />
            <SocialIconsList type={"footer"} />
          </li>
          <li className="mr-[91px]">
            <ServiсesList />
          </li>
          <li>
            <ContactList />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
