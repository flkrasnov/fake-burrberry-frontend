import React from "react";
import Responsive from "react-responsive";

function DesctopHidden({ children }) {
  return <Responsive maxWidth={991} children={children} />;
}

function DesctopVisible({ children }) {
  return <Responsive minWidth={992} children={children} />;
}

export { DesctopHidden, DesctopVisible };
