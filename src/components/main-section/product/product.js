import React, { Component } from 'react';
import ProductHeader from './product-header.js';
import ProductSlider from './product-slider.js';
import ProductInfo from './product-info.js';
import ProductColor from './product-color.js';
import ProductBtns from './product-buttons.js';

export default () => {
  return (
    
    <section className="product">
      <div className="container">
        <div className="row">

          <div className="col-xs-12">
            <ProductHeader />
          </div>

          <div className="col-xs-12 col-sm-7">
            <ProductSlider />
          </div>

          <div className="col-xs-12 col-sm-5">
            <ProductInfo />
            <ProductColor />
            <ProductBtns />
          </div>
          
        </div>
      </div>
    </section>

  );
};