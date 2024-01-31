import { format } from "date-fns";
import { useState, useEffect } from "react";
import { uk, enUS } from "date-fns/locale";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "../../../icons/iconComponent";

const PortfolioDetailInfoCard = ({ element }) => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation();
  const { startDate, endDate, links, category, image } = element;
  const [locale, setCurrentLanguage] = useState(enUS);

  useEffect(() => {
    if (currentLanguage === "ua") {
      setCurrentLanguage(uk);
    } else {
      setCurrentLanguage(enUS);
    }
  }, [currentLanguage]);

  const dateStart = format(new Date(startDate), "MMM yy", { locale });
  const dateEnd = format(new Date(endDate), "MMM yy", { locale });
  return (
    <div className="w-[919px] min-h-[350px] p-10 bg-footer bg-no-repeat bg-cover rounded-[16px]">
      <ul className="h-full flex gap-x-4 text-white bg-slate-300 bg-opacity-5 p-5 rounded-[16px]">
        <li className="w-[30%] flex flex-col justify-between">
          <div className="uppercase opacity-60 text-center mb-2">
            {dateStart} - {dateEnd}
          </div>

          <img src={image} alt={t(`portfolio.${element.id - 1}.alt`)} className="w-full rounded-xl" />
        </li>
        <li className="">
          <ul className="flex flex-col gap-y-3 justify-between h-full">
            <li className="text-2xl font-bold text-bg-blue">{t(`portfolio.${element.id - 1}.title`)}</li>
            <li className="text-xl opacity-80">{t(`portfolio.${element.id - 1}.description`)}</li>
            <li className="flex gap-4 flex-wrap">
              {links.map((item, index) => (
                <a
                  href={item.link}
                  target="_blank"
                  className="flex gap-x-1 font-semibold opacity-80 hover:text-bg-blue hover:opacity-100 portfolio-link"
                  rel="noreferrer"
                  key={item + index}
                >
                  <Link />
                  <p className="text-lg opacity-80">
                    {t(`portfolio.${element.id - 1}.links.${index}.linkDeskription`)}
                  </p>
                </a>
              ))}
            </li>
            <li className="flex gap-3 flex-wrap">
              {category.map((item, index) => (
                <div
                  className="w-fit px-5 py-2 rounded-full bg-bg-blue bg-opacity-10 text-bg-blue text-lg font-bold shadow-portfolioCategory"
                  key={item}
                >
                  {t(`portfolio.${element.id - 1}.category.${index}`)}
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
