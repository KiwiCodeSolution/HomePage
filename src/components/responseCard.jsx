import PropTypes from "prop-types";

const ResponseCard = ({ element }) => {
  return (
    <ul>
      <li className="w-[88px] mx-auto mb-1">
        <img
          src={element.photo}
          alt={`response ${element.name}`}
          className="object-cover w-[88px] h-[88px] rounded-full"
        />
      </li>
      <li className="text-xl font-bold text-center mb-1">{element.name}</li>
      <li className="text-base font-bold text-center mb-6">{element.company}</li>
      <li className="text-base opacity-50 text-center mb-1">{element.text}</li>
    </ul>
  );
};

ResponseCard.propTypes = {
  element: PropTypes.object.isRequired,
};

export default ResponseCard;
