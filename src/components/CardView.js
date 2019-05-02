import React from 'react';
import styled from 'styled-components/macro';

const Card = styled.div`
  background: rgba(32,33,36,0.92);
  color: rgba(255,255,255,0.87);
  box-shadow: 0 0.2rem 0.2rem rgba(0,0,0,0.54);
  padding: 0.625rem 1rem;
  margin: 1rem auto;
  box-sizing: border-box;
`;

class CardView extends React.Component {
  render() {
    return <Card {...this.props} />;
  }
}

export default CardView;