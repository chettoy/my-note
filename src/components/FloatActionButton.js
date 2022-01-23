import React from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import Velocity from 'velocity-animate';
import styled from 'styled-components/macro';
import styles from './FloatActionButton.module.scss';

const FabWrapper = styled.div.attrs({ className: styles.FabWrapper })`
  //nop
`;

const FabMenu = styled.div.attrs({ className: styles.fabMenu })`
  div {
    background: ${props => props.theme.FabMenuColor};
  }
`;

const FabButton = styled.div.attrs({ className: styles.fabView })`
  background: ${props => props.theme.FabColor};
`;

const IconWrapper = styled.div.attrs({ className: styles.iconWrapper })`
  svg {
    fill: ${props => props.theme.FabIconColor};
  }
`;

FabWrapper.defaultProps = {
  theme: {
    FabColor: "#FF4081",
    FabIconColor: "white",
    FabMenuColor: "#66ccff"
  }
};

class FloatActionButton extends React.Component {
  menuDOM = null;
  fabChild = null;

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  onClickHandler = () => {
    const nextState = !this.state.isOpen;
    const delay = 200 / this.fabChild.length;
    this.setState({ isOpen: nextState });
    this.fabChild.forEach((child, i) => {
      Velocity(child, "stop", true);
      Velocity(child, nextState ? "fadeIn" : "fadeOut", { duration: 200, delay: delay * i });
    });
  }

  render() {
    return (
      <FabWrapper className='fab'>
        <FabButton onClick={this.onClickHandler}>
          <IconWrapper>
            <Icon path={mdiClose} rotate={this.state.isOpen ? 360 : 315} />
          </IconWrapper>
        </FabButton>
        <FabMenu ref={el => this.menuDOM = el}>
          {this.props.children}
        </FabMenu>
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