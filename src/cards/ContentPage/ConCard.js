import styled from 'styled-components/macro';
import CardView from '../../components/CardView';

const ConCard = styled(CardView)`
  width: 40rem;
  max-width: 100%;
  @media screen and (min-width: 100rem) {
    width: 50rem;
  }
`;

export default ConCard;