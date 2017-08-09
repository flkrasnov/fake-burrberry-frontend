import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";

const Header = styled.header`
  background: #fff;
  border-bottom: 1px solid #c6c6c6;
`;

const Ancor = styled.a`
  .page-header-logo {
    display: block;
    margin: 1rem auto;
  }

  @media screen and (min-width: 48rem) {
    .page-header-logo {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export default () => {
  return (
    <Header>
      <Ancor href="/">
        <img className="page-header-logo" src={logo} alt="Burberry logo" />
      </Ancor>
    </Header>
  );
};
