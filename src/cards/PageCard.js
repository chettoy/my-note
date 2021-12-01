import styled from 'styled-components/macro';
import ClientUtils from '../common/ClientUtils';
import CardView from '../components/CardView';

const PageCard = styled(CardView)`
  position: absolute;
  top: calc(${ClientUtils.getStatusBarHeight()}px + 3.125rem);
  left: 50%;
  transform: translate(-50%,0);
  min-height: 50vh;
  width: 40rem;
  max-width: 100%;
  @media screen and (min-width: 100rem) {
    width: 50rem;
  }
`;

export default PageCard;