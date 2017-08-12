import React from "react";
import Responsive from "react-responsive";

function HiddenMax({ children }) {
  return <Responsive maxWidth={991} children={children} />;
}

function HiddenMin({ children }) {
  return <Responsive minWidth={992} children={children} />;
}

export { HiddenMin, HiddenMax };
