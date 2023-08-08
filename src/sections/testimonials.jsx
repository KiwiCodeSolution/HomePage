import Title from "../components/UI/title";
import TestimonialsFonPhoto from "../components/testimonialsFonPhoto";
import TestimonialsSwiper from "../components/testimonialsSwiper";

const Testimonials = () => {
  return (
    <section className="bg-bg-main z-10">
      <div className="container mx-auto px-10 md:px-20 xl:px-[120px] pt-8 pb-4 relative">
        <Title titleClass={"w-full mx-auto"}>Testimonials</Title>

        <TestimonialsSwiper />
        <TestimonialsFonPhoto />
      </div>
    </section>
  );
};

export default Testimonials;
