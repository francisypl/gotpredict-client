import React from "react";

export default function Label({ children }) {
  if (!children) return null;
  return <div className="el-label">{children}</div>;
}
