import { Translation } from "react-i18next";
import PropTypes from "prop-types";

const HowWeWorksItem = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-5 xl:gap-x-[228px] h-fit xl:h-[471px] pt-5 xl:pt-0 relative">
      <div className="h-full flex flex-col">
        <Translation>
          {(t) => (
            <h1 className="w-[280px] xl:w-[356px] text-[32px] xl:mt-[84px] p-0 mb-8 numbers__title">
              {t(`how.${item.id - 1}.title`)}
            </h1>
          )}
        </Translation>

        <Translation>
          {(t) => (
            <p className="w-[280px] xl:w-[356px] text-base text-white opacity-80 leading-relaxed">
              {t(`how.${item.id - 1}.text`)}
            </p>
          )}
        </Translation>
      </div>

      <div className="w-[280px] md:w-full xl:w-[605px] h-full">
        <img src={item.photo} alt={item.alt} className="h-full" />
      </div>
    </div>
  );
};

HowWeWorksItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

export default HowWeWorksItem;
