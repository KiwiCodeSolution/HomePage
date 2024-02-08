import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ResponseCard = ({ element }) => {
  const { t } = useTranslation();
  return (
    <ul>
      <li className="w-[88px] mx-auto mb-1">
        <img
          src={element.photo}
          alt={`response ${t(`response.${element.id - 1}.name`)}`}
          className="object-cover w-[88px] h-[88px] rounded-full"
        />
      </li>
      <li className="text-xl font-bold text-center mb-1">{t(`response.${element.id - 1}.name`)}</li>
      <li className="text-base font-bold text-center mb-4">{t(`response.${element.id - 1}.company`)}</li>
      <li className="text-base opacity-50 text-center mb-1">{t(`response.${element.id - 1}.text`)}</li>
    </ul>
  );
};

ResponseCard.propTypes = {
  element: PropTypes.object.isRequired,
};

export default ResponseCard;
