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

const SimpleButton = styled.button`
  height: 3rem;
  display: block;
  padding: 1rem 0;
  margin-bottom: 1rem;
  border: 1px solid;
  border-radius: 2px;
  border-color: ${props => (props.color === "white" ? "#171717" : "#fff")};
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;
  color: ${props => (props.color === "white" ? "#171717" : "#fff")};
  background-color: ${props => (props.color === "white" ? "#fff" : "#171717")};
`;

const TextBtn = styled.button`
  display: block;
  padding: 0;
  margin-bottom: 3rem;
  margin-top: .5rem;
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
      <SimpleButton color="black" type="button">
        select size
      </SimpleButton>

      <SimpleButton color="white" type="button">
        find in store
      </SimpleButton>

      <TextBtn type="button">NEED SIZE HELP?</TextBtn>
    </Buttons>
  );
};
