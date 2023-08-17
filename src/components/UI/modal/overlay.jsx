import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import useScrollBlock from "../../../hooks/useScrollBlock";

const modalRoot = document.querySelector("#modal-root");

const Overlay = ({ children, clickFn, overlayClass, type }) => {
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    function keyDown(e) {
      if (e.code !== "Escape") {
        return;
      }
      allowScroll();
      clickFn(false);
    }
    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [allowScroll, clickFn]);

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      clickFn();
    }
    return;
  }

  return createPortal(
    <div
      className="absolute h-screen w-full z-30 rounded-lg top-0 backdrop-blur font-main_en"
      onClick={handleOverlayClick}
    >
      {children}
    </div>,
    modalRoot
  );
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  clickFn: PropTypes.func.isRequired,
  overlayClass: PropTypes.string,
  type: PropTypes.string,
};

export default Overlay;
