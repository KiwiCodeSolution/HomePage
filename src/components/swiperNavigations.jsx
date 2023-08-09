import PropTypes from "prop-types";

import { Left, Right } from "../icons/iconComponent";
import "swiper/css";
import Button from "./UI/buttons";

const SwiperNavigations = ({ swipSection, swipClass }) => {
  return (
    <div className={`${swipClass} relative flex justify-center items-center gap-x-3`}>
      <Button btnStyle="roundBtn" btnClass={`${swipSection}-button-prev button-prev`} aria={"navigation left button"}>
        <Left />
      </Button>
      <div className={`${swipSection}-pagination flex justify-center gap-x-4 max-w-[90%] h-full`} />
      <Button btnStyle="roundBtn" btnClass={`${swipSection}-button-next button-next`} aria={"navigation right button"}>
        <Right />
      </Button>
    </div>
  );
};

SwiperNavigations.propTypes = {
  swipSection: PropTypes.string.isRequired,
  swipClass: PropTypes.string,
};

export default SwiperNavigations;
