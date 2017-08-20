import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import like from '../assets/like.svg';

const Wrapper = styled.div`margin-bottom: 2rem;`;

const Ancor = styled(Link)`
  color: #171717;
  text-decoration: none;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;

const More = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
`;

const Fit = styled.p`
  display: block;
  margin: 0;
  font-size: .75rem;
  line-height: 1rem;
`;

const Like = styled.button`
  display: block;
  width: 14px;
  height: 14px;
  padding: 0;
  margin: 0;
  margin-left: .5rem;
  border: 0;
  background-color: transparent;
  background-image: url(${like});
`;

const Name = styled.h3`
  margin: 0 0 .5rem;
  font-size: .75rem;
  line-height: 1rem;
  font-weight: 600;

  @media screen and (min-width: 48rem) {
    font-size: .875rem;
    line-height: 1.25rem;
  }

  @media screen and (min-width: 62rem) {
    font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

const Colors = styled.p`
  margin: 0;
  margin-bottom: .5rem;
  font-size: .75rem;
  line-height: 1rem;
`;

const ColorsCount = styled.span`
  border-bottom: 1px solid #171717;
  margin-left: 3px;
`;

const Price = styled.h5`
  margin: 0;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: 400;
`;

function Preview(props) {
  const LikeModule = () =>
    (props.label != null
      ? <div>
        <More>
          <Fit>
            {props.label}
          </Fit>
          <Like />
        </More>
        <Name>
          <Ancor to={`${props.to}`}>
            {props.name}
          </Ancor>
        </Name>
      </div>
      : <More>
        <Like />
      </More>);

  const ColorsModule = () =>
    props.colorsCount > 0 &&
    <Colors>
      Available in&nbsp;
      <ColorsCount>
        <Ancor to={`${props.to}`}>
          {props.colorsCount}&nbsp; colors
        </Ancor>
      </ColorsCount>
    </Colors>;

  return (
    <Wrapper>
      <Ancor to={`${props.to}`}>
        <Img src={props.img} alt={props.alt} />
      </Ancor>
      <LikeModule label={props.label} />
      <ColorsModule colorsCount={props.colorsCount} name={props.name} />
      <Price>
        <FormattedNumber
          style="currency" // eslint-disable-line
          currency="RUB"
          maximumFractionDigits={0}
          minimumFractionDigits={0}
          value={props.price}
          currencyDisplay="symbol"
        />
      </Price>
    </Wrapper>
  );
}

Preview.propTypes = {
  to: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  colorsCount: PropTypes.number,
  price: PropTypes.number.isRequired,
};

Preview.defaultProps = {
  label: '',
  colorsCount: 0,
};

export default Preview;
