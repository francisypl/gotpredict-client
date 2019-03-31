import React from "react";
import PropTypes from "prop-types";

import Label from "./Label";

export default function Choices({ label, choices, children, onClick }) {
  return (
    <div className="el-choices">
      <Label>{label}</Label>
      {children &&
        children.map((child, index) => (
          <div
            key={`chioce-${index}`}
            className="el-choice"
            onClick={() => onClick(choices[index])}
          >
            {child}
          </div>
        ))}
    </div>
  );
}

Choices.propTypes = {
  label: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.array,
  onClick: PropTypes.func
};
