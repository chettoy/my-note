import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const delayFadeIn = keyframes`
  0% {opacity: 0;}
  50% {opacity: 0;}
  100% {opacity: 1;}
`;
const shine = keyframes`
  to {background-position: -200% center;}
`;
const dotAnim = keyframes`
  0% {bottom: 0em;}
  25% {bottom: 0.5em;}
  50% {bottom: 0.5em;}
  75% {bottom: 0em;}
`;

const LoadingText = styled.div`
  color: white;
  font-size: 1rem;
  text-align: center;
  animation: ${delayFadeIn} 0.4s;
  span {
    position: relative;
    bottom: 0em;
  }
  span:nth-child(4) {
    font-size: 2rem;
    background: linear-gradient(to left, #00FFBF, #B3FF19, #F0F, #00FFBF);
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shine} 4s linear infinite;
  }
  span:nth-child(1), span:nth-child(5) {
    animation: ${dotAnim} 1.2s linear infinite;
  }
  span:nth-child(2), span:nth-child(6) {
    animation: ${dotAnim} 1.2s linear 0.3s infinite;
  }
  span:nth-child(3), span:nth-child(7) {
    animation: ${dotAnim} 1.2s linear 0.6s infinite;
  }
`;

class Loading extends React.Component {
  render() {
    return (
      <LoadingText>
        <span></span><span></span><span></span>
        <span>loading...</span>
        <span></span><span></span><span></span>
      </LoadingText>
    )
  }
}

export default Loading;