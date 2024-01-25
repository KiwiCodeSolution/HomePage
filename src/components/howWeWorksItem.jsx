import { Translation } from "react-i18next";
import PropTypes from "prop-types";

const HowWeWorksItem = ({ item }) => {
  return (
    <div className="flex gap-x-[228px] h-[471px] relative">
      <div className="h-full flex flex-col">
        <Translation>
          {(t) => (
            <h1 className="numbers__title text-[32px] mt-[84px] mb-8 w-[356px]">{t(`how.${item.id - 1}.title`)}</h1>
          )}
        </Translation>

        <Translation>
          {(t) => (
            <p className="text-base text-white opacity-80 leading-relaxed w-[356px]">{t(`how.${item.id - 1}.text`)}</p>
          )}
        </Translation>
      </div>

      <div className="w-[605px] h-full">
        <img src={item.photo} alt={item.alt} className="h-full" />
      </div>
    </div>
  );
};

HowWeWorksItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

export default HowWeWorksItem;
