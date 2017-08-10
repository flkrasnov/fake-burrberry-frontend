import React from "react";
import styled from "styled-components";

const Colors = styled.div`
  padding: 0 .5rem;

  @media screen and (min-width: 48rem) {
    padding-left: 0;
    padding-right: 0;
    border-bottom: 0;
  }
`;

const ColorTxt = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: .75rem;
  line-height: 0.9375rem;
`;

const Toggle = styled.div`
  display: flex;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;
`;

export default () => {
  return (
    <Colors>
      <ColorTxt>Colour: Honey</ColorTxt>

      <Toggle>
        <button className="product-color-toggler-btn color-toggle-black" type="button">
          black color
        </button>

        <button className="product-color-toggler-btn product-color-toggler-btn-active color-toggle-honey" type="button">
          honey color
        </button>
      </Toggle>
    </Colors>
  );
};
