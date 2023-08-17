import { motion } from "framer-motion";
import ServiсesList from "../components/services";

import { MTitle } from "../components/UI/title";
import { titleAnimation } from "../helpers/stylesHelpers";

const About = () => {
  const serviceAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.4, duration: 0.5 },
    }),
  };

  return (
    <section className="bg-bg-main bg-aboutWave bg-no-repeat bg-[center_top_-8rem] z-10">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] md:pb-[64px] relative h-full" id="about">
        <div className="w-full h-20 -top-[75px] left-0 absolute gradient" />
        <ServiсesList type={"about"} />
        <div className="about bg-no-repeat bg-right-top min-h-[640px]">
          <MTitle variants={titleAnimation} initial="hidden" whileInView="visible">
            About company
          </MTitle>
          <motion.ul
            className="flex flex-col gap-y-6 w-[335px] xl:w-[514px] text-xl text-txt-grey mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <motion.li
              className="animate-right max-w-full text-justify xl:text-left"
              custom={1}
              variants={serviceAnimation}
            >
              <span className="text-2xl text-txt-white">KiWiCode Solution</span> is an innovative IT company that
              provides comprehensive solutions in UI/UX design, desktop application development, and marketing. The
              company has many years of experience in creating high-quality projects for clients worldwide, and they
              focus on meeting the individual needs and requirements of each client.
            </motion.li>
            <motion.li
              className="animate-right w-full text-justify xl:text-left"
              custom={2}
              variants={serviceAnimation}
            >
              <span className="text-2xl text-txt-white">KiWiCode Solution</span> guarantees high-quality work and uses
              the latest technological solutions to ensure the success of its clients in the business sphere. They also
              provide ongoing support and technical assistance to their clients even after completing the project.
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default About;
