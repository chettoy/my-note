import styled from 'styled-components/macro';
import CardView from '../../components/CardView';

const ConCard = styled(CardView).attrs({className: 'typo'})`
  font-size: 1rem;
  line-height: 1.5em;
  
  a.post-title-link {
    color: #2196f3;
    border-bottom-color: #2196f3;
    margin: 1rem 0;
    display: inline-block;
  }
  
  p {
    white-space: pre-line;
  }
  
  pre {
    background: ${props => props.theme.PreBlockBackground};
    overflow: auto;
  }
  
  strong, b,
  h1, h2, h3, h4, h5, h6,
  em, legend, caption {
    color: ${props => props.theme.TextEmColor};
  }
  
  width: 40rem;
  max-width: 100%;
  
  @media screen and (min-width: 90rem) {
    width: 50rem;
  }
  @media screen and (min-width: 120rem) {
    width: 70rem;
  }
`;

ConCard.defaultProps = {
  theme: {
    PreBlockBackground: "#f8f8f8",
    TextEmColor: "#000"
  }
};

export default ConCard;