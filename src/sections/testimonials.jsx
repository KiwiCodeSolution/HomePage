import { useTranslation } from "react-i18next";
import { MTitle } from "../components/UI/title";
import TestimonialsFonPhoto from "../components/testimonialsFonPhoto";
import TestimonialsSwiper from "../components/testimonialsSwiper";
import { titleAnimation } from "../helpers/stylesHelpers";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-bg-main bg-testimonials z-10">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] pt-[90px] md:pt-8 pb-20 md:pb-20 xl:pb-[300px] min-h-full xl:min-h-[934px] relative testimonials">
        <MTitle variants={titleAnimation} initial="hidden" whileInView="visible" titleClass={"w-full mx-auto"}>
          {t(`title.testimonials`)}
        </MTitle>

        <TestimonialsSwiper />

        <TestimonialsFonPhoto />
      </div>
    </section>
  );
};

export default Testimonials;
