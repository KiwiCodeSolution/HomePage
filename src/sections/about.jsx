import ServiсesList from "../components/services";

const About = () => {
  return (
    <section className="bg-bg-main bg-aboutWave bg-no-repeat bg-[center_top_-8rem] z-10">
      <div className="container mx-auto px-10 relative h-full">
        <div className="w-full h-20 -top-20 absolute gradient"></div>
        <ServiсesList />
        <div className="bg-aboutGirl bg-no-repeat bg-right-top  h-[640px]">
          <h1 className="title mb-8">About company</h1>
          <ul className="flex flex-col gap-y-6 w-[514px] text-xl text-txt-grey">
            <li className="animate-right">
              <span className="text-2xl text-txt-white">KiWiCode Solution</span> is an innovative IT company that
              provides comprehensive solutions in UI/UX design, desktop application development, and marketing. The
              company has many years of experience in creating high-quality projects for clients worldwide, and they
              focus on meeting the individual needs and requirements of each client.
            </li>
            <li className="animate-right">
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
