import React from "react";
import styled from "styled-components";
import Header from "../common/ProductHeader";
import Slider from "./ProductSlider";
import Info from "./ProductInfo";
import Color from "./ProductColor";
import Sizes from "./ProductSizes";
import Btns from "./ProductButtons";
import HiddenMax from "../common/HiddenMax";
import HiddenMin from "../common/HiddenMin";
import TextBtn from "../common/TextButton";

const FlexWrapper = styled.div`
  @media screen and (min-width: 62rem) {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
`;

const ColorWrapper = styled.div`@media screen and (min-width: 62rem) {background-color: #d4bdad;}`;

export default () => {
  return (
    <ColorWrapper>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <HiddenMax>
              <Header />
            </HiddenMax>
          </div>

          <div className="col-xs-12 col-sm-7 col-md-6">
            <Slider />
          </div>

          <div className="col-xs-12 col-sm-5 col-md-6">
            <FlexWrapper>
              <HiddenMin>
                <Header />
              </HiddenMin>
              <Info />
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                  <Color />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                  <Sizes />
                </div>
              </div>
              <Btns />

              <HiddenMax>
                <TextBtn>NEED SIZE HELP?</TextBtn>
              </HiddenMax>
            </FlexWrapper>
          </div>
        </div>
      </div>
    </ColorWrapper>
  );
};
