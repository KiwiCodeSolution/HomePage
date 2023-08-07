import SubTitle from "../components/UI/subTitle";
import Title from "../components/UI/title";
import ContactForm from "../components/contactForm";
import TableItem from "../components/tableItem";

const ITEMS = [
  { id: "1", title: "Consultation", text: "Get detailed consultation from manager and expert for your area" },
  { id: "2", title: "Define tasks", text: "Define tasks, goals, business needs and project concept" },
  { id: "3", title: "Short overview", text: "Short overview of KiWiCode Solution portfolio and best practice" },
  { id: "4", title: "Determine the scope", text: "Determine the scope, boundaries of the project and expectations" },
];

const Consultation = () => {
  return (
    <section className="bg-bg-main z-10">
      <div className="container mx-auto px-10 md:px-20 xl:px-[120px] pt-8 pb-4 relative">
        <Title>Consultation of the Area Expert</Title>
        <SubTitle subTitleClass={"w-[452px] uppercase mb-8"}>DURING CONSULTATION YOU WILL:</SubTitle>

        <ul className="w-[866px] h-[234px] grid grid-cols-1 md:grid-cols-2 border-[0.5px] border-bg-green border-opacity-[.4]">
          {ITEMS.map((el) => (
            <TableItem element={el} />
          ))}
        </ul>

        <ContactForm />
      </div>
    </section>
  );
};

export default Consultation;
