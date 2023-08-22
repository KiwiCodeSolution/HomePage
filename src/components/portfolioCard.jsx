import PropTypes from "prop-types";

const PortfolioCard = ({ element }) => {
  return (
    <div className="w-[280px] mx-auto">
      <a href={element.urlProject} target="_blank" rel="noreferrer">
        <img src={element.urlImage} alt={element.alt} className="w-full" />
      </a>
    </div>
  );
};

PortfolioCard.propTypes = {
  element: PropTypes.object.isRequired,
};

export default PortfolioCard;
