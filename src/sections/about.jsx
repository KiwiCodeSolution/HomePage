import ServiсesList from "../components/services";

import Title from "../components/UI/title";

const About = () => {
  return (
    <section className="bg-bg-main bg-aboutWave bg-no-repeat bg-[center_top_-8rem] z-10">
      <div className="container mx-auto px-5 md:px-20 xl:px-[120px] relative h-full ">
        <div className="w-full h-20 -top-[75px] left-0 absolute gradient" />
        <ServiсesList type={"about"} />
        <div className="about bg-no-repeat bg-right-top min-h-[640px]">
          <Title>About company</Title>
          <ul className="flex flex-col gap-y-6 w-[335px] xl:w-[514px] text-xl text-txt-grey mt-8">
            <li className="animate-right max-w-full">
              <span className="text-2xl text-txt-white">KiWiCode Solution</span> is an innovative IT company that
              provides comprehensive solutions in UI/UX design, desktop application development, and marketing. The
              company has many years of experience in creating high-quality projects for clients worldwide, and they
              focus on meeting the individual needs and requirements of each client.
            </li>
            <li className="animate-right w-full">
              <span className="text-2xl text-txt-white">KiWiCode Solution</span> guarantees high-quality work and uses
              the latest technological solutions to ensure the success of its clients in the business sphere. They also
              provide ongoing support and technical assistance to their clients even after completing the project.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
