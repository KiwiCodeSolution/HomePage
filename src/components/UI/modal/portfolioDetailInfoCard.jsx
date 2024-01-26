import { format } from "date-fns";
import { Link } from "../../../icons/iconComponent";

const PortfolioDetailInfoCard = ({ element }) => {
  const { title, description, startDate, endDate, links, category, image, alt } = element;
  console.log(title, description, startDate, endDate, links, category);
  const dateStart = format(new Date(startDate), "MMM. yy");
  const dateEnd = format(new Date(endDate), "MMM. yy");
  console.log(dateStart, dateEnd);

  return (
    <div className="w-[919px] min-h-[350px] p-10 bg-footer bg-no-repeat bg-cover rounded-[16px]">
      <ul className="h-full flex gap-x-4 text-white bg-slate-300 bg-opacity-5 p-5 rounded-[16px]">
        <li className="w-[30%] flex flex-col justify-between">
          <div className="uppercase opacity-60 text-center mb-2">
            {dateStart} - {dateEnd}
          </div>

          <img src={image} alt={alt} className="w-full rounded-xl" />
        </li>
        <li className="">
          <ul className="flex flex-col gap-y-3 justify-between h-full">
            <li className="text-2xl font-bold text-bg-blue">{title}</li>
            <li className="text-xl opacity-80">{description}</li>
            <li className="flex gap-4 flex-wrap">
              {links.map((item, index) => (
                <a
                  href={item.link}
                  target="_blank"
                  className="flex gap-x-1 font-semibold opacity-80 hover:text-bg-blue hover:opacity-100 portfolio-link"
                  rel="noreferrer"
                  key={item + index}
                >
                  <Link /> <p className="text-lg opacity-80">{item.linkDeskription}</p>
                </a>
              ))}
            </li>
            <li className="flex gap-3 flex-wrap">
              {category.map((item) => (
                <div
                  className="w-fit px-5 py-2 rounded-full bg-bg-blue bg-opacity-10 text-bg-blue text-lg font-bold shadow-portfolioCategory"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioDetailInfoCard;
