import React from "react";
import styled from "styled-components";

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
`;

const Code = styled.p`
  margin: 1rem 0;
  font-size: .75rem;
  line-height: 0.875rem;

  @media screen and (min-width: 48rem) {
    margin-top: 0;
  }
`;

export default () => {
  return (
    <Info>
      <Price>110 000 руб.</Price>
      <Code>Item 39428531</Code>
    </Info>
  );
};
