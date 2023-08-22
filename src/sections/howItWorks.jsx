// import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MTitle } from "../components/UI/title";
import { blocAnimation, titleAnimation } from "../helpers/stylesHelpers";
// import { NextStep } from "../icons/iconComponent";

// const TEXTS = [
//   {
//     id: "1",
//     img: "../img/how-works-1.png",
//   },
//   {
//     id: "2",
//     img: "../img/how-works-2.png",
//   },
//   {
//     id: "3",
//     img: "../img/how-works-3.png",
//   },
//   {
//     id: "4",
//     img: "../img/how-works-4.png",
//   },
// ];

const STEPS = [1, 2, 3, 4];

const HowItWorks = () => {
  // const [number, setNumber] = useState(1);
  const { t } = useTranslation();

  return (
    <section className="bg-bg-main z-10">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] relative h-full pb-7 xl:pb-[60px]">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
        <div className="grid grid-cols-1">
          <div className="flex flex-col relative order-2 md:order-1">
            <MTitle variants={titleAnimation} initial="hidden" whileInView="visible">
              {t(`title.how`)}
            </MTitle>

            {/* <div className="flex gap-x-4 xl:gap-x-8 max-w-[430px] h-[-right-480px] mt-2 xl:mb-[50px]">
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
                  {t(`how.${number - 1}.title`)}
                </li>
                <li className="opacity-[0.8] text-2xl text-justify xl:text-left">{t(`how.${number - 1}.text`)}</li>
              </ul>
            </div> */}
            {/* </div> */}
            {/* <div className="h-[260px] md:h-full order-1 md:order-2 md:mt-16">
            <img src={TEXTS[number - 1].img} alt="how it works illustrations" className="h-full md:h-[75%]" />
          </div> */}

            <ul className="grid grid-cols-2 gap-y-14 xl:mt-[40px] px-10">
              {STEPS.map((el) => (
                <motion.li
                  className={`w-[350px] min-h-full ${el > 2 ? "ml-auto" : "mr-auto"} relative rounded-b-lg`}
                  key={el}
                  initial="hidden"
                  whileInView="visible"
                  custom={el * 2}
                  variants={blocAnimation}
                >
                  <p className="min-h-[96px] px-2 py-4 text-2xl font-bold bg-gradient-to-b from-bg-green to-bg-blue text-txt-white rounded-tl-lg rounded-tr-3xl">
                    {t(`how.${el - 1}.title`)}
                  </p>
                  <div className="w-full min-h-[175px] border-[1px] border-bg-green rounded-lg p-2">
                    {t(`how.${el - 1}.text`)}
                  </div>
                  {/* {el !== STEPS.length && <NextStep className={"absolute top-1/2 -translate-y-1/2 -right-48"} />} */}
                </motion.li>
              ))}
              {/* <li className="w-[350px] h-[200px] mx-auto relative">
                <p className="p-2 text-2xl font-bold bg-bg-green text-txt-white rounded-tl-lg rounded-tr-3xl">
                  {t(`how.0.title`)}
                </p>
                <div className="w-full h-36 border border-1 border-bg-green rounded-b-lg p-2">{t(`how.0.text`)}</div>
                <NextStep className={"absolute top-1/2 -translate-y-1/2 -right-48"} />
              </li>
              <li className="w-[350px] h-[200px] mx-auto relative">
                <p className="p-2 text-2xl font-bold bg-bg-green text-txt-white rounded-tl-lg rounded-tr-3xl">
                  {t(`how.1.title`)}
                </p>
                <div className="w-full h-36 border border-1 border-bg-green rounded-b-lg p-2">{t(`how.0.text`)}</div>
                <NextStep className={"absolute top-1/2 -translate-y-1/2 -right-48"} />
              </li>
              <li className="w-[350px] h-[200px] mx-auto relative">
                <p className="p-2 text-2xl font-bold bg-bg-green text-txt-white rounded-tl-lg rounded-tr-3xl">
                  {t(`how.2.title`)}
                </p>
                <div className="w-full h-36 border border-1 border-bg-green rounded-b-lg p-2">{t(`how.0.text`)}</div>
                <NextStep className={"absolute top-1/2 -translate-y-1/2 -right-48"} />
              </li>
              <li className="w-[350px] h-[200px] mx-auto">
                <p className="p-2 text-2xl font-bold bg-bg-green text-txt-white rounded-tl-lg rounded-tr-3xl">
                  {t(`how.3.title`)}
                </p>
                <div className="w-full h-36 border border-1 border-bg-green rounded-b-lg p-2">{t(`how.3.text`)}</div>
              </li> */}
            </ul>
            {/* circles */}

            <div className="hidden xl:inline-block absolute -top-[200px] -left-[225px] w-[430px] h-[430px] bg-bg-green rounded-full opacity-20 blur-[100px]" />
            <div className="hidden xl:inline-block absolute top-[150px] -right-[225px] w-[530px] h-[530px] bg-bg-green rounded-full opacity-20 blur-[100px] -z-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
