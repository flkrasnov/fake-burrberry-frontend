import React from "react";
import styled from "styled-components";
import Heading from "./AccordionHeading";
import HiddenMax from "../common/HiddenMax";

const Head = styled.section`
  @media screen and (min-width: 48rem) {
    .accordion-row-head {
      padding: 0;
    }
  }
`;

const Body = styled.div`
  display: none;
  padding-bottom: 2rem;

  @media screen and (min-width: 48rem) {
    display: block;
    padding-bottom: 1.5rem;
  }
`;

const DeliveryImg = styled.img`
  @media screen and (min-width: 48rem) {
    display: block;
    width: 100%;
  }
`;

const BodyHeading = styled.h2`
  height: 1.1875rem;
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1875rem;
`;

const FlexWrapper = styled.div`
  @media screen and (min-width: 62rem) {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
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

export default () => {
  return (
    <div>
      <HiddenMax>
        <Head>
          <div className="container">
            <Heading content="Description" />
          </div>
        </Head>
      </HiddenMax>
      <Body>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-7 col-lg-7">
              <DeliveryImg src="img/delivery.jpg" alt="delivery image" />
            </div>

            <div className="col-xs-12 col-sm-5 col-lg-4 col-lg-offset-1">
              <FlexWrapper>
                <BodyHeading>DELIVERY</BodyHeading>

                <Bold>Free Next Day Delivery</Bold>
                <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>

                <Bold>Collect-in-Store</Bold>
                <Text>Order online today and pick up your items in store as early as tomorrow</Text>

                <Bold>Free Returns</Bold>
                <Text>Enjoy free returns on your order</Text>

                <Bold>Free Gift Packaging</Bold>
                <Text>Discover our gift packaging, a gold lined box tied with a coloured ribbon</Text>
              </FlexWrapper>
            </div>
          </div>
        </div>
      </Body>
    </div>
  );
};
