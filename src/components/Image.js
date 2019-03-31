import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Label from "./Label";

export default function Image({
  label,
  isIcon,
  whiteBg,
  darkBg,
  overlay,
  ...props
}) {
  return (
    <div className={cx("el-img", { "el-icon": isIcon })}>
      <div className={cx({ darkBg, whiteBg })}>
        {React.createElement("img", props)}
      </div>
      <Label>{label}</Label>
    </div>
  );
}
Image.propTypes = {
  isIcon: PropTypes.bool,
  whiteBg: PropTypes.bool,
  darkBg: PropTypes.bool,
  overlay: PropTypes.number,
  label: PropTypes.string
};
