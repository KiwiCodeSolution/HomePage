import PropTypes from "prop-types";
import Overlay from "./UI/modal/overlay";

const STYLES = {
  error: "bg-bg-red shadow-error",
  success: "bg-bg-green shadow-success",
  info: "bg-bg-navy shadow-info",
  alert: "bg-bg-orange shadow-alert",
};

const Notification = ({ text, type, clickFn }) => {
  return (
    <Overlay clickFn={clickFn}>
      <div className={`${STYLES[type]} p-8 mx-auto rounded-[16px]`}>
        <p className="text-txt-white text-xl opacity-1">{text} </p>
      </div>
    </Overlay>
  );
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "success", "info", "alert"]).isRequired,
};

export default Notification;
