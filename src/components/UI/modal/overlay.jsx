import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import useScrollBlock from "../../../hooks/useScrollBlock";
import { useTranslation } from "react-i18next";

const modalRoot = document.querySelector("#modal-root");

const Overlay = ({ children, clickFn, overlayClass, type }) => {
  const { i18n } = useTranslation();
  const [allowScroll] = useScrollBlock();

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

  const currenFont = () => {
    if (i18n.resolvedLanguage === "ua") {
      return "font-main_ua";
    }

    return "font-main_en";
  };

  return createPortal(
    <div
      className={`fixed inset-0 w-full z-30 rounded-lg top-0 backdrop-blur ${currenFont}`}
      onClick={handleOverlayClick}
    >
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
  type: PropTypes.string,
};

export default Overlay;
