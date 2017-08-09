import React from "react";
import styled from "styled-components";

const List = styled.nav`
  @media screen and (min-width: 48rem) {
    h4 {
      margin: 0;
      margin-bottom: 1rem;
      font-size: .75rem;
      font-weight: 700;
      text-transform: uppercase;
      line-height: .875rem;
    }

    a {
      display: block;
      margin-bottom: .75rem;
      font-size: .75rem;
      font-weight: 500;
      line-height: 1rem;
      text-transform: capitalize;
      text-decoration: none;
      color: #999;
    }
  }
`;

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <List>
            <h4>Customer service</h4>
            <a href="">Contact Us</a>
            <a href="">Payment</a>
            <a href="">Shipping</a>
            <a href="">Returns</a>
            <a href="">Faqs</a>
            <a href="">Live Chat</a>
            <a href="">The Burberry App</a>
            <a href="">Store Location</a>
          </List>
        </div>

        <div className="col-md-3">
          <List>
            <h4>Our Company</h4>
            <a href="">Our History</a>
            <a href="">Burberry Group Plc</a>
            <a href="">Careers</a>
            <a href="">Corporate Responsibility</a>
            <a href="">Site Map</a>
          </List>
        </div>

        <div className="col-md-3">
          <List>
            <h4>Legal & Cookies</h4>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
            <a href="">Accessibility Statement</a>
            <a href="">Japan Only - SCTL indications</a>
          </List>
        </div>
      </div>
    </div>
  );
};
