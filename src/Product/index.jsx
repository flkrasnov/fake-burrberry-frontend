import React from "react";
import Product from "./Product";
import Accordion from "../Accordion";
import Recomendations from "./Recomendations";
import Links from "./Links";

export default () => {
  return (
    <main>
      <Product />
      <Accordion />
      <Recomendations />
      <Links />
    </main>
  );
};
