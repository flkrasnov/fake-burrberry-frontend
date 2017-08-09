import React, { Component } from 'react';
import Product from './product/product';
import Accordion from './accordion/accordion';
import Recomendations from './recomendations/recomendations';
import Links from './links/links';

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