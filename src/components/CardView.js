import styled from 'styled-components/macro';

const CardView = styled.div`
  background: ${props => props.theme.CardColor};
  color: ${props => props.theme.TextColor};
  box-shadow: 0 0.2rem 0.2rem rgba(0,0,0,0.54);
  padding: 0.625rem 1rem;
  margin: 1rem auto;
  box-sizing: border-box;
`;

CardView.defaultProps = {
  theme: {
    CardColor: "white",
    TextColor: "black"
  }
};

export default CardView;