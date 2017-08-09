import React, { Component } from 'react';
import triangle from '../../../triangle.svg';
import AccordionHeading from './accordion-heading';


const accordionHeadings = [
  'Description',
  'Shipping & returns'
];


export default () => {
  return (

    <section className="accordion">
      <div className="accordion-row accordion-row-open">

        <div className="accordion-row-head">
          <AccordionHeading heading={accordionHeadings} />
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
          <AccordionHeading heading={accordionHeadings} />
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

  );
};





















