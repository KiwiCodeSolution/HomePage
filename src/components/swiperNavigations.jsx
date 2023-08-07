import PropTypes from "prop-types";

import { Left, Right } from "../icons/iconComponent";
import "swiper/css";
import Button from "./UI/buttons";

const SwiperNavigations = ({ swipSection }) => {
  return (
    <div className="w-1/4 mt-8 relative ml-auto flex justify-center items-center">
      <Button btnStyle="swiperBtn" btnClass={`${swipSection}-button-prev button-prev`}>
        <Left />
      </Button>
      <div className={`${swipSection}-pagination flex justify-center gap-x-4 w-[90%] h-full`} />
      <Button btnStyle="swiperBtn" btnClass={`${swipSection}-button-next button-next`}>
        <Right />
      </Button>
    </div>
  );
};

SwiperNavigations.propTypes = {
  swipSection: PropTypes.string.isRequired,
};

export default SwiperNavigations;
