import React from "react";
import PropTypes from "prop-types";

const arrowStyle = {
  backgroundColor: "#fff",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  border: "solid gray 2px",
  opacity: "0.8",
};

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, ...arrowStyle }}
      onClick={props.onClick}
    >
      <span>&rarr;</span>
    </div>
  );
};

export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, ...arrowStyle }}
      onClick={props.onClick}
    >
      <span>&larr;</span>
    </div>
  );
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
