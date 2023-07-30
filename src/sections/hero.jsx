import CountUp from "react-countup";
import Button from "../components/UI/buttons";
import IndicatorsList from "../components/indicators";

const Hero = () => {
  return (
    <section className="w-[1280px] mx-auto pt-[90px] min-h-[100vh] fullscreen">
      <div className="fixed w-[1280px] mx-auto top-20 fullscreen__body">
        <div className="h-[828px] bg-hero bg-no-repeat bg-right-top bg-contain mx-auto px-10 pt-20">
          <h1 className="w-[704px] text-[64px] font-bold leading-[1.4] mb-6">
            Full cycle <span className="accent">development</span> and
            <span className="accent"> support</span> of your sites
          </h1>
          <p className="text-2xl leading-[1.6] w-[452px] mb-4">
            More than <CountUp end={5} />+ ears of experience that helps build effective process.
          </p>
          <IndicatorsList />
          <Button btnStyle="startedBtn">Get started</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
