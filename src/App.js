import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";

export default () => {
  return (
    <div>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        <meta name="description" content="Welcome to burberry.com" />
      </Helmet>
      <Header />
      <Product />
      <Footer />
    </div>
  );
};
