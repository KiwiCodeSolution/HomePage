import About from "./sections/about";
import Consultation from "./sections/consultation";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import HowItWorks from "./sections/howItWorks";
import Portfolio from "./sections/portfolio";
import Team from "./sections/team";
import Testimonials from "./sections/testimonials";

function App() {
  return (
    <div className="bg-bg-main text-txt-white font-main_en flex flex-col min-h-[100vh]">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Portfolio />
      <Team />
      <Consultation />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
