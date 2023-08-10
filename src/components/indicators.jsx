import CountUp from "react-countup";

const INDICATORS = [
  { value: "87", category: "Projects" },
  { value: "211", category: "Happy Clients" },
  { value: "10", category: "Talents" },
];

const IndicatorsList = () => {
  return (
    <ul className="w-[320px] md:w-full flex gap-x-4 mb-9 xl:mb-7">
      {INDICATORS.map(({ value, category }) => (
        <li key={value} className="flex flex-col gap-y-2 text-center font-bold">
          <p className="text-[40px] accent">
            <CountUp end={value} />+
          </p>

          <p className="text-2xl">{category}</p>
        </li>
      ))}
    </ul>
  );
};

export default IndicatorsList;
