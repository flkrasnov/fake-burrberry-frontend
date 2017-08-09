import React from "react";
import styled from "styled-components";

const Recomendations = styled.section`
  padding: 0 .5rem;

  @media screen and (min-width: 48rem) {
    padding-left: 0;
    padding-right: 0;
    border-bottom: 0;
  }
`;

const Heading = styled.h2`
  display: inline-block;
  padding-bottom: .5rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  border-bottom: 1px solid #111;
  text-transform: uppercase;

  @media screen and (min-width: 48rem) {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: 1.1875rem;
  }
`;

const BlocksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;

  @media screen and (min-width: 48rem) {
    margin-bottom: 4rem;
  }
`;

const AncorBlock = styled.a`
  box-sizing: border-box;
  display: block;
  flex-basis: 50%;
  margin-bottom: 2rem;
  color: #171717;
  text-decoration: none;
`;

const BlockImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const BlockName = styled.h3`
  margin: .5rem 0;
  font-family: Lora, serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;

  @media screen and (min-width: 48rem) {
    line-height: 1.2;
  }
`;

const BlockPrice = styled.h5`
  margin: 0;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: 400;
  color: #999;
`;

export default () => {
  return (
    <Recomendations>
      <div className="container">
        <Heading>we recommend</Heading>
      </div>

      <BlocksWrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-3">
              <AncorBlock href="">
                <BlockImg src="img/wr1.jpg" alt="Emroided Hooded" />
                <BlockName>Emroided Hooded Content For Three Lines</BlockName>
                <BlockPrice>27 000 руб</BlockPrice>
              </AncorBlock>
            </div>

            <div className="col-xs-6 col-sm-3">
              <AncorBlock href="">
                <BlockImg src="img/wr2.jpg" alt="Relaxed Fit Stretch Jeans" />
                <BlockName>Relaxed Fit Stretch Jeans Content For Three Lines</BlockName>
                <BlockPrice>22 500 руб</BlockPrice>
              </AncorBlock>
            </div>

            <div className="col-xs-6 col-sm-3">
              <AncorBlock href="">
                <BlockImg src="img/wr3.jpg" alt="Leather and House" />
                <BlockName>Leather and House Check Content For Three Lines</BlockName>
                <BlockPrice>120 000 руб</BlockPrice>
              </AncorBlock>
            </div>

            <div className="col-xs-6 col-sm-3">
              <AncorBlock href="">
                <BlockImg src="img/wr4.jpg" alt="Leather Wingtip" />
                <BlockName>Leather Wingtip Check Content For Three Lines</BlockName>
                <BlockPrice>46 000 руб</BlockPrice>
              </AncorBlock>
            </div>
          </div>
        </div>
      </BlocksWrapper>
    </Recomendations>
  );
};
