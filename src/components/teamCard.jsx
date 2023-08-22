import PropTypes from "prop-types";
const TeamCard = ({ element }) => {
  return (
    <ul className="w-[316px] min-h-[480px] flex flex-col gap-y-2 mx-auto">
      <li className="bg-white rounded-[16px] h-[405px]">
        <img
          src={element.photo}
          alt={`${element.name} + ${element.position} `}
          className="w-full max-h-full rounded-2xl"
        />
      </li>
      <li className="uppercase text-[32px] font-bold">{element.name}</li>
      <li className="text-base">{element.position}</li>
    </ul>
  );
};

TeamCard.propTypes = {
  element: PropTypes.object.isRequired,
};

export default TeamCard;
