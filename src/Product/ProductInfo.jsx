import React from "react";
import styled from "styled-components";
import Code from "../common/ProductCode";
import HiddenMax from "../common/HiddenMax";

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .5rem;

  @media screen and (min-width: 48rem) {
    padding-left: 0;
    padding-right: 0;
    border-bottom: 0;
  }
`;

const Price = styled.h2`
  margin: 1rem 0;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;

  @media screen and (min-width: 48rem) {
    margin-top: 0;
  }

  @media screen and (min-width: 62rem) {
    font-weight: 500;
    margin-bottom: 3rem;
  }
`;

export default () => {
  return (
    <Info>
      <Price>110 000 руб.</Price>
      <HiddenMax>
        <Code />
      </HiddenMax>
    </Info>
  );
};
