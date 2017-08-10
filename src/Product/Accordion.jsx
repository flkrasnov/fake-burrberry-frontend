import React from "react";
import styled from "styled-components";
import AccordionHeading from "./AccordionHeading";

const Row = styled.div`
  padding: 0 .5rem;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    padding-left: 0;
    padding-right: 0;
    border-bottom: 0;
  }
`;

const Body = styled.div`
  display: none;
  padding-bottom: 2rem;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  p,
  ul li {
    margin: 0;
    font-family: Lora, serif;
    font-size: .875rem;
    line-height: 1.5rem;
  }

  br {
    line-height: 1.5rem;
  }

  @media {
    display: block;
    padding-bottom: 1.5rem;
  }
`;

const DeliveryBody = styled.div`
  display: none;
  padding-bottom: 2rem;

  @media screen and (min-width: 48rem) {
    display: block;
    padding-bottom: 1.5rem;
  }
`;

const BodyImg = styled.div`
  @media screen and (min-width: 48rem) {
    img {
      display: block;
      width: 100%;
    }
  }
`;

const Heading = styled.h2`
  height: 1.1875rem;
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1875rem;
`;

const Bold = styled.h4`
  margin: 0;
  margin-bottom: .25rem;
  font-size: .75rem;
  font-weight: 700;
  line-height: 0.875rem;
`;

const Text = styled.p`
  margin: 0;
  margin-bottom: 1.5rem;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
`;

const DeliveryImg = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

export default () => {
  return (
    <section className="accordion">
      <Row>
        <div className="accordion-row-head">
          <AccordionHeading />
        </div>

        <Body>
          <div className="container">
            <p>A refined car coat crafted in protective cotton gabardine.</p>
            <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.</p>
            <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
            <p>The piece is finished with a distinctive check undercollar.</p>
            <br />
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
        </Body>
      </Row>

      <Row>
        <div className="accordion-row-head visible-xs">
          <AccordionHeading />
        </div>

        <DeliveryBody>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-7">
                <BodyImg>
                  <DeliveryImg src="img/delivery.jpg" alt="delivery image" />
                </BodyImg>
              </div>

              <div className="col-xs-12 col-sm-5">
                <div>
                  <Heading>DELIVERY</Heading>

                  <Bold>Free Next Day Delivery</Bold>
                  <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>

                  <Bold>Collect-in-Store</Bold>
                  <Text>Order online today and pick up your items in store as early as tomorrow</Text>

                  <Bold>Free Returns</Bold>
                  <Text>Enjoy free returns on your order</Text>

                  <Bold>Free Gift Packaging</Bold>
                  <Text>Discover our gift packaging, a gold lined box tied with a coloured ribbon</Text>
                </div>
              </div>
            </div>
          </div>
        </DeliveryBody>
      </Row>
    </section>
  );
};
