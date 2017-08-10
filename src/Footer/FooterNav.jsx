import React from "react";
import styled from "styled-components";

const ListHeading = styled.nav`
  @media screen and (min-width: 48rem) {
    margin: 0;
    margin-bottom: 1rem;
    font-size: .75rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: .875rem;
  }
`;

const ListAncor = styled.nav`
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
            <ListHeading>Customer service</ListHeading>
            <ListAncor href="/">Contact Us</ListAncor>
            <ListAncor href="/">Payment</ListAncor>
            <ListAncor href="/">Shipping</ListAncor>
            <ListAncor href="/">Returns</ListAncor>
            <ListAncor href="/">Faqs</ListAncor>
            <ListAncor href="/">Live Chat</ListAncor>
            <ListAncor href="/">The Burberry App</ListAncor>
            <ListAncor href="/">Store Location</ListAncor>
          </nav>
        </div>

        <div className="col-md-3">
          <nav>
            <ListHeading>Our Company</ListHeading>
            <ListAncor href="/">Our History</ListAncor>
            <ListAncor href="/">Burberry Group Plc</ListAncor>
            <ListAncor href="/">Careers</ListAncor>
            <ListAncor href="/">Corporate Responsibility</ListAncor>
            <ListAncor href="/">Site Map</ListAncor>
          </nav>
        </div>

        <div className="col-md-3">
          <nav>
            <ListHeading>Legal & Cookies</ListHeading>
            <ListAncor href="/">Terms & Conditions</ListAncor>
            <ListAncor href="/">Privacy Policy</ListAncor>
            <ListAncor href="/">Cookie Policy</ListAncor>
            <ListAncor href="/">Accessibility Statement</ListAncor>
            <ListAncor href="/">Japan Only - SCTL indications</ListAncor>
          </nav>
        </div>
      </div>
    </div>
  );
};
