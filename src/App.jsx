import { useTranslation } from "react-i18next";
import SocialIconsList from "./components/socialIconsList";

import About from "./sections/about";
import Consultation from "./sections/consultation";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import HowItWorks from "./sections/howItWorks";
// import Portfolio from "./sections/portfolio";

import Testimonials from "./sections/testimonials";

function App() {
  const { i18n } = useTranslation();

  const currenFont = () => {
    if (i18n.resolvedLanguage === "ua") {
      return "font-main_ua";
    }

    return "font-main_en";
  };

  return (
    <div className={`bg-bg-main text-txt-white ${currenFont} flex flex-col min-h-[100vh] relative`}>
      <SocialIconsList type="allSite" />
      <Header />
      <Hero />
      <About />
      <HowItWorks />

      <Consultation />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
