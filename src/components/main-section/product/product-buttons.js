import React from "react";
import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 .5rem;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    padding-left: 0;
    padding-right: 0;
    border-bottom: 0;
  }
`;

const TextBtn = styled.button`
  display: block;
  padding: 0;
  margin-bottom: 3rem;
  border: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  background: none;
  color: #171717;
  cursor: pointer;
`;

export default () => {
  return (
    <Buttons>
      <button className="product-buttons-btn product-buttons-btn-black" type="button">
        Select a size
      </button>
      <button className="product-buttons-btn product-buttons-btn-white" type="button">
        Find in store
      </button>

      <TextBtn type="button">NEED SIZE HELP?</TextBtn>
    </Buttons>
  );
};
