import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const Overlay = ({ children, clickFn, overlayClass }) => {
  return createPortal(
    <div className="absolute h-screen w-full z-30 rounded-lg top-0 backdrop-blur font-main_en" onClick={clickFn}>
      {children}
    </div>,
    modalRoot
  );
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  clickFn: PropTypes.func.isRequired,
  overlayClass: PropTypes.string,
};

export default Overlay;
