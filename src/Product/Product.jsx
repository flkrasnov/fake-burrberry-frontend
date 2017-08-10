import React from "react";
import Header from "./ProductHeader";
import Slider from "./ProductSlider";
import Info from "./ProductInfo";
import Color from "./ProductColor";
import Btns from "./ProductButtons";

export default () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Header />
          </div>

          <div className="col-xs-12 col-sm-7">
            <Slider />
          </div>

          <div className="col-xs-12 col-sm-5">
            <Info />
            <Color />
            <Btns />
          </div>
        </div>
      </div>
    </section>
  );
};
