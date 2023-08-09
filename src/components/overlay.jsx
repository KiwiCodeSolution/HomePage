import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const Overlay = ({ children, clickFn, overlayClass }) => {
  return createPortal(
    <div className="absolute h-screen w-full z-30 rounded-lg top-0 backdrop-blur font-main_en" onClick={clickFn}>
      <div className="flex justify-between absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 z-50 rounded-[16px]">
        {children}
      </div>
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
