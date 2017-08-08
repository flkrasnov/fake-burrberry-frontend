import React from 'react';

export default () => {
  return (
    <footer className="page-footer">

      <div className="page-footer-nav">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <nav className="page-footer-nav-list">
                <h4>Customer service</h4>
                <a href="">Contact Us</a>
                <a href="">Payment</a>
                <a href="">Shipping</a>
                <a href="">Returns</a>
                <a href="">Faqs</a>
                <a href="">Live Chat</a>
                <a href="">The Burberry App</a>
                <a href="">Store Location</a>
              </nav>
            </div>

            <div className="col-md-3">
              <nav className="page-footer-nav-list">
                <h4>Our Company</h4>
                <a href="">Our History</a>
                <a href="">Burberry Group Plc</a>
                <a href="">Careers</a>
                <a href="">Corporate Responsibility</a>
                <a href="">Site Map</a>
              </nav>
            </div>

            <div className="col-md-3">
              <nav className="page-footer-nav-list">
                <h4>Legal & Cookies</h4>
                <a href="">Terms & Conditions</a>
                <a href="">Privacy Policy</a>
                <a href="">Cookie Policy</a>
                <a href="">Accessibility Statement</a>
                <a href="">Japan Only - SCTL indications</a>
              </nav>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <button className="page-footer-shipping" type="button">Shipping country: Russian Federation</button>
        <button className="page-footer-lang" type="button">Language: English</button>

        <h4 className="page-footer-help">Need help?</h4>
        <a className="page-footer-more" href="">Find out more and contact us</a>
      </div>
      
    </footer>
  );
};