import React from "react";
import styled from "styled-components";

const Code = styled.p`
  margin: 1rem 0;
  font-size: .75rem;
  line-height: 0.875rem;

  @media screen and (min-width: 48rem) {
    margin-top: 0;
  }
`;

export default () => {
  return <Code>Item 39428531</Code>;
};
