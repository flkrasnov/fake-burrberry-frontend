import React, { Component } from 'react';
import logo from './logo.svg';
import triangle from './triangle.svg';
import './App.css';

class app extends Component {
  render() {
    return (

      <div>

        <header className="page-header">
          <a href="">
            <img className="page-header-logo" src={logo} alt="Burberry logo" />
          </a>
        </header>

        <main>
          <section className="product">

            <div className="container">
              <div className="row">

                <div className="col-xs-12">
                  <div className="product-header">
                    <h1 className="product-header-text">Long Cotton Gabardine Car Coat</h1>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-7">
                  <div className="product-slider">
                    
                    <img className="product-slider-img" src="img/img4@2x.jpg" alt="gabardine coat front img" />
                    <img className="product-slider-img" src="img/img3@2x.jpg" alt="gabardine coat img 2" />
                    <img className="product-slider-img" src="img/img2@2x.jpg" alt="gabardine coat img 3" />
                    <img className="product-slider-img" src="img/img1@2x.jpg" alt="gabardine coat img 4" />

                  </div>
                </div>

                <div className="col-xs-12 col-sm-5">

                  <div className="product-info">
                    <h2 className="product-info-price">110 000 руб.</h2>
                    <p className="product-info-code">Item 39428531</p>
                  </div>

                  <div className="product-color">
                    <p className="product-color-text">Colour: Honey</p>

                    <div className="product-color-toggler">
                      <button className="product-color-toggler-btn color-togl-black" type="button">black color</button>
                      <button className="product-color-toggler-btn product-color-toggler-btn-active color-togl-honey" type="button">honey color</button>
                    </div>
                  </div>

                  <div className="product-buttons">
                    <button className="product-buttons-btn product-buttons-btn-black" type="button">Select a size</button>
                    <button className="product-buttons-btn product-buttons-btn-white" type="button">Find in store</button>

                    <button className="product-buttons-btn-text" type="button">NEED SIZE HELP?</button>
                  </div>

                </div>
                
              </div>
            </div>

          </section>

          <section className="accordion">
            <div className="accordion-row accordion-row-open">

              <div className="accordion-row-head">
                <div className="container">
                  <button className="accordion-row-head-btn" type="button">
                    <h2 className="accordion-row-head-text">Description</h2>
                  </button>
                </div>
              </div>

              <div className="accordion-row-body">
                <div className="container">
                  <p>A refined car coat crafted in protective cotton gabardine.</p>
                  <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.</p>
                  <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
                  <p>The piece is finished with a distinctive check undercollar.</p>
                  <br/>
                  <p>Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to size.</p>

                  <ul>
                    <li>Outer: 100% cotton</li>
                    <li>Check lining: 100% cotton</li>
                    <li>Sleeve lining: 100% viscose</li>
                    <li>Buttons: buffalo horn</li>
                    <li>Specialist dry clean</li>
                    <li>Made in Europe</li>
                    <li>Item 39428531</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-row">

              <div className="accordion-row-head visible-xs">
                <div className="container">
                  <button className="accordion-row-head-btn" type="button">
                    <h2 className="accordion-row-head-text">Shipping & returns</h2>
                  </button>
                </div>
              </div>

              <div className="accordion-row-body">

                <div className="container">
                  <div className="row">

                    <div className="col-xs-12 col-sm-7">
                      <div className="accordion-row-body-img">
                        <img src="img/delivery.jpg" alt="delivery image" />
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-5">
                      <div className="accordion-row-body-delivery">
                        <h2>DELIVERY</h2>

                        <h4>Free Next Day Delivery</h4>
                        <p>Order before 7pm Monday to Thursday for delivery the next day</p>

                        <h4>Collect-in-Store</h4>
                        <p>Order online today and pick up your items in store as early as tomorrow</p>

                        <h4>Free Returns</h4>
                        <p>Enjoy free returns on your order</p>

                        <h4>Free Gift Packaging</h4>
                        <p>Discover our gift packaging, a gold lined box tied with a coloured ribbon</p>
                      </div>
                    </div>
                    
                  </div>
                </div>

              </div>
            </div>

          </section>

          <section className="recomendations">

            <div className="container">
              <h2 className="recomendations-heading">we recommend</h2>
            </div>

            <div className="recomendations-blocks">
              <div className="container">
                <div className="row">

                
                    <div className="col-xs-6 col-sm-3">
                      <a className="recomendations-blocks-block" href="">
                        <img className="recomendations-blocks-block-img" src="img/wr1.jpg" alt="Emroided Hooded" />
                        <h3 className="recomendations-blocks-block-name">Emroided Hooded Content For Three Lines</h3>
                        <h5 className="recomendations-blocks-block-price">27 000 руб</h5>
                      </a>
                    </div>

                    <div className="col-xs-6 col-sm-3">
                      <a className="recomendations-blocks-block" href="">
                        <img className="recomendations-blocks-block-img" src="img/wr2.jpg" alt="Relaxed Fit Stretch Jeans" />
                        <h3 className="recomendations-blocks-block-name">Relaxed Fit Stretch Jeans Content For Three Lines</h3>
                        <h5 className="recomendations-blocks-block-price">22 500 руб</h5>
                      </a>
                    </div>

                    <div className="col-xs-6 col-sm-3">
                      <a className="recomendations-blocks-block" href="">
                        <img className="recomendations-blocks-block-img" src="img/wr3.jpg" alt="Leather and House" />
                        <h3 className="recomendations-blocks-block-name">Leather and House Check Content For Three Lines</h3>
                        <h5 className="recomendations-blocks-block-price">120 000 руб</h5>
                      </a>
                    </div>

                    <div className="col-xs-6 col-sm-3">
                      <a className="recomendations-blocks-block" href="">
                        <img className="recomendations-blocks-block-img" src="img/wr4.jpg" alt="Leather Wingtip" />
                        <h3 className="recomendations-blocks-block-name">Leather Wingtip Check Content For Three Lines</h3>
                        <h5 className="recomendations-blocks-block-price">46 000 руб</h5>
                      </a>
                    </div>

                </div>
              </div>
            </div>

          </section>

          <section className="more-links">
            <div className="container">
              <h2 className="more-links-heading">more for you</h2>
            </div>


            <div className="container">
              <div className="more-links-block">
                <a className="more-links-link" href="">Men’s Black Trench Coats</a>
                <a className="more-links-link" href="">Men’s Short Trench Coats</a>
                <a className="more-links-link" href="">Men’s Long Trench Coats</a>
              </div>
            </div>
          </section>
        </main>

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

      </div>
    );
  }
}


export default app;
