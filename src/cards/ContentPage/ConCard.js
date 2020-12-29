import styled from 'styled-components/macro';
import CardView from '../../components/CardView';

const ConCard = styled(CardView)`
  font-size: calc(10px + 2vmin);
  line-height: 1.7em;
  h1 {
    font-size: 1.5rem;
  }
  .con-preview {
    line-height: 1.7rem;
  }
  a.con-preview {
    color: #2196f3;
    font-size: 1.5rem;
  }
  p.con-preview {
    font-size: 1rem;
  }
  iframe, video, img {
    max-width: 100%;
    height: auto;
  }
  blockquote {
    margin: 0;
    padding: 0.3rem 0.5rem;
    border-left: 0.25rem solid #0c0;
    background: #f5f2f0;
  }
  pre {
    overflow: auto;
  }
  
  width: 40rem;
  max-width: 100%;
  
  @media screen and (min-width: 100rem) {
    width: 50rem;
  }
  @media screen and (min-width: 120rem) {
    width: 70rem;
  }
`;

export default ConCard;