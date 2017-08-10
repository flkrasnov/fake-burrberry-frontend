import React from "react";
import styled from "styled-components";

const Heading = styled.div`
  padding: 0 .5rem;

  @media screen and (min-width: 48rem) {
    padding-left: 0;
    padding-right: 0;
    border-bottom: 0;
  }
`;

const Text = styled.div`
  margin: 1rem 0;
  font-family: Lora, serif;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: #171717;

  @media screen and (min-width: 48rem) {
    margin: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.8125rem;
  }
`;

export default () => {
  return (
    <Heading>
      <Text>Long Cotton Gabardine Car Coat</Text>
    </Heading>
  );
};
