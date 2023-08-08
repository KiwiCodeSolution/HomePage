import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import items from "../data/testimonials.json";

const styles = [
  "w-[88px] h-[88px] top-[213px] right-[300px] opacity-[.8]",
  "w-[64px] h-[64px] top-[208px] right-[161px] opacity-[.6]",
  "w-[44px] h-[44px] top-[372px] right-[253px] opacity-[.7]",
  "w-[44px] h-[44px] top-[472px] right-[157px]",
  "w-[44px] h-[44px] top-[485px] right-[295px] opacity-[.8]",
  "w-[64px] h-[64px] top-[623px] right-[234px]",
  "w-[44px] h-[44px] top-[740px] right-[455px] opacity-[.6]",
  "w-[64px] h-[64px] top-[799px] right-[752px]",
  "w-[44px] h-[44px] top-[780px] left-[492px] opacity-[.8]",
  "w-[88px] h-[88px] top-[617px] left-[244px]",
  "w-[44px] h-[44px] top-[515px] left-[305px] opacity-[.6]",
  "w-[44px] h-[44px] top-[442px] left-[142px] opacity-[.8]",
  "w-[44px] h-[44px] top-[370px] left-[256px]",
  "w-[88px] h-[88px] top-[236px] left-[300px] opacity-[.7]",
  "w-[64px] h-[64px] top-[125px] left-[145px]",
  "w-[44px] h-[44px] top-[240px] left-[484px] opacity-[.8]",
  "w-[64px] h-[64px] top-[125px] left-[835px] opacity-[.6]",
  "w-[64px] h-[64px] top-[165px] left-[610px] opacity-[.7]",
];

const TestimonialsFonPhoto = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      {/* <ul> */}
      {items.map((el) => (
        <li key={el.id} className={`${styles[el.id]} absolute`}>
          <MouseParallaxChild factorX={0.3} factorY={0.5}>
            <img src={el.photo} alt="testimonials" className={`${styles[el.id]} rounded-full object-cover`} />
          </MouseParallaxChild>
        </li>
      ))}
      {/* </ul> */}
    </MouseParallaxContainer>
  );
};

export default TestimonialsFonPhoto;
