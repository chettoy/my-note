import React from 'react';
import styled from 'styled-components/macro';
import ClientUtils from '../common/ClientUtils';
import CardView from '../components/CardView';

const CardFather = styled(CardView)`
  position: absolute;
  top: calc(${ClientUtils.getStatusBarHeight()}px + 3.125rem);
  min-height: 50vh;
  width: 40rem;
  max-width: 100%;
  @media screen and (min-width: 100rem) {
    width: 50rem;
  }
`;

class Card extends React.Component {
  render() {
    return <CardFather {...this.props} />;
  }
}

export default Card;