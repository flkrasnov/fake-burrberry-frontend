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

  @media screen and (min-width: 62rem) {
    flex-direction: row;
  }
`;

const SimpleButton = styled.button`
  height: 3rem;
  display: block;
  padding: 1rem 0;
  margin-bottom: 1rem;
  border: 1px solid;
  border-color: #171717;
  border-radius: 2px;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;
  color: #171717;
  background-color: transparent;

  ${props =>
    props.primary &&
    `
    margin-right: 1rem;
    background-color: #171717;
    color: #fff;
  `};

  @media screen and (min-width: 62rem) {
    flex-basis: 100%;
    margin-bottom: 1.5rem;
  }
`;

export default () => {
  return (
    <Buttons>
      <SimpleButton primary type="button">
        select size
      </SimpleButton>

      <SimpleButton type="button">find in store</SimpleButton>
    </Buttons>
  );
};
