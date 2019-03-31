import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ onClick, to, children }) {
  return (
    <button className="el-button" onClick={onClick}>
      {to ? <Link to={to}>{children}</Link> : children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string
};
