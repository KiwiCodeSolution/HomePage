import Title from "../components/UI/title";
import TestimonialsFonPhoto from "../components/testimonialsFonPhoto";
import TestimonialsSwiper from "../components/testimonialsSwiper";

const Testimonials = () => {
  return (
    <section className="bg-bg-main bg-testimonials z-10">
      <div className="container mx-auto px-5 md:px-10 xl:px-[120px] pt-[90px] md:pt-8 pb-40 md:pb-20 xl:pb-[300px] min-h-full xl:min-h-[934px] relative">
        <Title titleClass={"w-full mx-auto"}>Testimonials</Title>

        <TestimonialsSwiper />

        <TestimonialsFonPhoto />
      </div>
    </section>
  );
};

export default Testimonials;
