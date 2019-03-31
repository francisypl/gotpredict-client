import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Header from "./Header";

export default function Choices({ label, choices, children, onClick, inline }) {
  const [selected, setSelected] = useState(-1);
  const choose = index => {
    setSelected(index);
    return void onClick(choices[index]);
  };
  return (
    <div className="el-choices">
      <Header header="h2">{label}</Header>
      <div className={cx({ inline })}>
        {children &&
          children.map((child, index) => (
            <div
              key={`chioce-${index}`}
              className={cx("el-choice", { selected: index === selected })}
              onClick={choose.bind(this, index)}
            >
              {child}
            </div>
          ))}
      </div>
    </div>
  );
}

Choices.propTypes = {
  label: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.array,
  onClick: PropTypes.func,
  inline: PropTypes.bool
};
