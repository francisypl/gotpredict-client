import React from "react";
import PropTypes from "prop-types";

export default function Header({ header, ...props }) {
  return React.createElement(header, props);
}

Header.propTypes = {
  header: PropTypes.string
};

Header.defaultProps = {
  header: "h1"
};
