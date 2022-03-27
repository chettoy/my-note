import React from 'react';
import styled from 'styled-components/macro';
import Velocity from 'velocity-animate';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #66ccff;
`;

class Framework extends React.Component<any, any> {

  render() {
    return (
      <Container></Container>
    )
  }


  componentDidMount() {

    /* register global events */
    window.addEventListener('resize', this.handleResize);

    /* caculate and set view state */
    setTimeout(this.handleResize, 20);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }


  handleResize = (resizeEvent: UIEvent) => {
    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;
    console.log(`resize(${windowWidth}, ${windowHeight})`);
  }

}

export default Framework;