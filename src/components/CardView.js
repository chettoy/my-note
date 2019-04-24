import React from 'react';
import styled from 'styled-components/macro';

const Card = styled.div`
  background: rgba(255,255,255,0.92);
  color: rgba(0,0,0,0.87);
  box-shadow: 0 0.2rem 0.2rem rgba(0,0,0,0.54);
  padding: 0.625rem 1rem;
  margin: 1rem auto;
  max-width: 100%;
  width: 40rem;
  box-sizing: border-box;
`;

class CardView extends React.Component {
  render() {
    return (
      <Card>{this.props.children}</Card>
    );
  }
}

export default CardView;