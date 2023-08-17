import { useState } from "react";
import { MTitle } from "../components/UI/title";
import { titleAnimation } from "../helpers/stylesHelpers";

const TEXTS = [
  {
    id: "1",
    title: "DESIGN",
    text: "This is the starting point and the most important part because it helps to visualize the whole future website and all its features. Everything can be thought over to the smallest detail of how everything will be working, the website logic, and the final structure. Hence, this is the best way to understand what do you want to get, and you will be able to control every corner of the development, which means not a single little thing will go unnoticed.",
    img: "../img/how-works-1.png",
  },
  {
    id: "2",
    title: "HTML CODING",
    text: "This step is needed to see how your website is working without adding backend logic. It displays to us how the animations work and shows all the visual issues. We test adaptability and appearance for different devices.HTML coding not only a technical part but a visualization of your thoughts and ideas on a working website.",
    img: "../img/how-works-2.png",
  },
  {
    id: "3",
    title: "BACK-END CODING",
    text: "The back-end is the inner world of your site.Automation, the ability to edit and manage your site yourself. All this can be done for your convenience at this stage.Want to change a picture or add a new post? You don’t need to look for developers for this, now you can do everything yourself. Moreover, exist many comfortable plugins for every case, like SEO plugin where just a few clicks can bring your site up, in search. And the most important part that a well-written back-end makes your site work quickly and efficiently.",
    img: "../img/how-works-3.png",
  },
  {
    id: "4",
    title: "START YOUR PROJECT",
    text: "Everything is ready, we did it the way you want, and now we can transfer the site to your hosting. The business is working and developing, you have an excellent website that fully displays all your capabilities and takes you to a completely new level.",
    img: "../img/how-works-4.png",
  },
];

const HowItWorks = () => {
  const [number, setNumber] = useState(1);

  return (
    <section className="bg-bg-main z-10">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] relative h-full pb-7 xl:pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col relative order-2 md:order-1">
            <MTitle variants={titleAnimation} initial="hidden" whileInView="visible">
              How it Works
            </MTitle>
            <div className="flex gap-x-4 xl:gap-x-8 max-w-[430px] h-[400px] mt-2 xl:mb-[50px]">
              <ul className="flex flex-col justify-between">
                {TEXTS.map(({ id }) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => setNumber(id)}
                      onMouseEnter={() => setNumber(id)}
                      className={`text-[32px] xl:text-5xl ${
                        id === number ? "opacity-[1]" : "opacity-[0.5]"
                      } hover:opacity-[1] focus:opacity-[1] numbers`}
                      aria-label="number buttons"
                    >
                      {id}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="pt-2">
                <li className="text-2xl xl:text-[32px] font-medium mb-[10px] numbers__title">
                  {TEXTS[number - 1].title}
                </li>
                <li className="opacity-[0.8] text-justify xl:text-left">{TEXTS[number - 1].text}</li>
              </ul>
            </div>
          </div>
          <div className="h-[260px] md:h-full order-1 md:order-2 md:mt-16">
            <img src={TEXTS[number - 1].img} alt="how it works illustrations" className="h-full md:h-[75%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
