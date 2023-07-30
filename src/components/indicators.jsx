import CountUp from "react-countup";

const INDICATORS = [
  { value: "87", category: "Projects" },
  { value: "211", category: "Happy Clients" },
  { value: "10", category: "Talents" },
];

const IndicatorsList = () => {
  return (
    <ul className="flex gap-x-4 mb-10">
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
