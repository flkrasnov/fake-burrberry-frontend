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

const TogglePanel = styled.div`
  display: flex;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;
`;

const ToggleButton = styled.button`
  box-sizing: border-box;
  display: block;
  margin-right: 1rem;
  border-radius: 50%;
  font-size: 0;
  line-height: 0;
  cursor: pointer;
  border: ${props => (props.active ? "1px solid #232122" : "0")};
  padding: ${props => (props.active ? "1.1875rem" : "1.25rem")};
  background-color: ${props => props.color};
`;

function ColorButton(props) {
  return (
    <ToggleButton active={props.active} color={props.color} name={props.name} type="button">
      choose {props.name} color
    </ToggleButton>
  );
}

export default () => {
  return (
    <Colors>
      <ColorTxt>Colour: Honey</ColorTxt>

      <TogglePanel>
        <ColorButton color="#232122" name="black" />

        <ColorButton active="true" color="#cfa880" name="honey" />
      </TogglePanel>
    </Colors>
  );
};
