import React from "react";
import styled from "styled-components";

const NavHeading = styled.nav`
  @media screen and (min-width: 48rem) {
    margin: 0;
    margin-bottom: 1rem;
    font-size: .75rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: .875rem;
  }
`;

const Ancor = styled.a`
  @media screen and (min-width: 48rem) {
    display: block;
    margin-bottom: .75rem;
    font-size: .75rem;
    font-weight: 500;
    line-height: 1rem;
    text-transform: capitalize;
    text-decoration: none;
    color: #999;
  }
`;

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <nav>
            <NavHeading>Customer service</NavHeading>
            <Ancor href="/">Contact Us</Ancor>
            <Ancor href="/">Payment</Ancor>
            <Ancor href="/">Shipping</Ancor>
            <Ancor href="/">Returns</Ancor>
            <Ancor href="/">Faqs</Ancor>
            <Ancor href="/">Live Chat</Ancor>
            <Ancor href="/">The Burberry App</Ancor>
            <Ancor href="/">Store Location</Ancor>
          </nav>
        </div>

        <div className="col-md-3">
          <nav>
            <NavHeading>Our Company</NavHeading>
            <Ancor href="/">Our History</Ancor>
            <Ancor href="/">Burberry Group Plc</Ancor>
            <Ancor href="/">Careers</Ancor>
            <Ancor href="/">Corporate Responsibility</Ancor>
            <Ancor href="/">Site Map</Ancor>
          </nav>
        </div>

        <div className="col-md-3">
          <nav>
            <NavHeading>Legal & Cookies</NavHeading>
            <Ancor href="/">Terms & Conditions</Ancor>
            <Ancor href="/">Privacy Policy</Ancor>
            <Ancor href="/">Cookie Policy</Ancor>
            <Ancor href="/">Accessibility Statement</Ancor>
            <Ancor href="/">Japan Only - SCTL indications</Ancor>
          </nav>
        </div>
      </div>
    </div>
  );
};
