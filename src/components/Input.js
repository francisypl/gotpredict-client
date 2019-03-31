import React, { useState } from "react";
import PropTypes from "prop-types";
import { uniqueId } from "lodash";

import Label from "./Label";

export default function Input({ label, placeholder, onChange }) {
  return (
    <div className="el-input">
      <Label>{label}</Label>
      <input
        type="text"
        onChange={e => onChange(e.target.value)}
        name={uniqueId((label || "el-input") + "-")}
        placeholder={placeholder}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};
