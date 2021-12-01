import styled from 'styled-components/macro';
import styles from './CardView.module.scss';

const CardView = styled.div.attrs({
  className: styles.CardView
})`
  background: ${props => props.theme.CardColor};
  color: ${props => props.theme.TextColor};
`;

CardView.defaultProps = {
  theme: {
    CardColor: "white",
    TextColor: "black"
  }
};

export default CardView;