import React from "react";
import ProductHeader from "./ProductHeader";
import ProductSlider from "./ProductSlider";
import ProductInfo from "./ProductInfo";
import ProductColor from "./ProductColor";
import ProductBtns from "./ProductButtons";

export default () => {
  return (
    <section>
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
