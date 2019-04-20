import React from 'react';
import Icon from '@mdi/react';
import {mdiClose} from '@mdi/js';
import Velocity from 'velocity-animate';
import styled from 'styled-components/macro';

const FabWrapper = styled.div`
  z-index: 103;
  transform: translate3d(0,0,0); //It prevents move when scrolling
  
  .fabView {
    background: #FF4081;
    width: 3.5rem;
    height: 3.5rem;
    text-align: center;
    line-height: 3.5rem;
    border-radius: 50%;
    filter: drop-shadow(0.1rem 0.1rem 0.2rem rgba(112, 112, 112, 0.7));
  }
  
  .fabView .iconWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .iconWrapper svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: white;
    display: block;
    margin: 0 auto;
    transition: transform 1s;
  }
  
  .fabMenu {
    position: absolute;
  }
  
  .fabMenu div {
    position: absolute;
    background: #66ccff;
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 50%;
    filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.5));
    display: none;
   }
`;

class FloatActionButton extends React.Component {
  menuDOM = null;
  fabChild = null;

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  onClickHandler = () => {
    const nextState = !this.state.isOpen;
    const delay = 500 / this.fabChild.length;
    this.setState({isOpen: nextState});
    this.fabChild.forEach((child, i) => {
      Velocity(child, "stop", true);
      Velocity(child, nextState? "fadeIn": "fadeOut", {duration: 300, delay: delay * i});
    });
  }

  render() {
    return (
      <FabWrapper className='fab'>
        <div className='fabView' onClick={this.onClickHandler}>
          <div className='iconWrapper'>
            <Icon path={mdiClose} rotate={this.state.isOpen? 360: 315}/>
          </div>
        </div>
        <div className='fabMenu' ref={el => this.menuDOM = el}>
          {this.props.children}
        </div>
      </FabWrapper>
    );
  }

  componentDidMount() {
    // get DOM
    const fab = this.menuDOM.parentNode;
    const fabChild = [...this.menuDOM.childNodes];
    this.fabChild = fabChild;
    // recover offset (if already adjusted by server side)
    this.menuDOM.style.left = 'auto';
    this.menuDOM.style.top = 'auto';
    fabChild.forEach((child, i) => {
      child.style.left = 'auto';
      child.style.top = 'auto';
    });
    // calc offset
    const fabOffset = fab.getBoundingClientRect();
    fabChild[0].style.display = "block"; //so we can get the offset
    const childOffset = fabChild[0].getBoundingClientRect();
    fabChild[0].style.display = "none";
    this.menuDOM.style.left = (fabOffset.left + fab.offsetWidth / 2) - (childOffset.left + childOffset.width / 2) + "px";
    this.menuDOM.style.top = (fabOffset.top + fab.offsetHeight / 2) - (childOffset.top + childOffset.height / 2) + fabOffset.height + "px";
    const fabRange = 90 / (fabChild.length - 1);
    const r = 1.2;
    fabChild.forEach((child, i) => {
      child.style.left = - Math.cos((fabRange * i) * Math.PI / 180) * fabOffset.width * r + "px";
      child.style.top = - Math.sin((fabRange * i) * Math.PI / 180) * fabOffset.width * r + "px";
    });
  }
}

export default FloatActionButton;