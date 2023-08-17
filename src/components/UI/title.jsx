import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export const Title = forwardRef(({ children, titleClass }, ref) => {
  const additionalStyle = titleClass || "";

  return (
    <h1 ref={ref} className={`${additionalStyle} title`}>
      {children}
    </h1>
  );
});

Title.propTypes = {
  children: PropTypes.node.isRequired,
  titleClass: PropTypes.string,
};

export const MTitle = motion(Title);
