import React from 'react';
import styled, { css } from 'styled-components/macro';
import Icon from '@mdi/react';
import {mdiMenu, mdiMagnify} from '@mdi/js';

const toolbarShadow = css`
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
`;
const ToolbarView = styled.div`
  ${toolbarShadow};
  background-color: #2196f3;
  width: 100%;
  height: 3.125rem;
  position: fixed;
  top: 0;
  z-index: 104;
`;
const Title = styled.span`
  color: white;
  font-size: 1.25rem;
  line-height: 3.125rem;
  float: left;
  a {
    color: white;
  }
`;
const IconFather = styled.span`
  display: block;
  width: 3.125rem;
  height: 3.125rem;
  font-size: 1.25rem;
  text-align: center;
  line-height: 3.125rem;
  svg {
    fill: white;
    width: 1.25rem;
    height: 1.25rem;
    vertical-align: middle;
  }
`;
const MenuIcon = styled(IconFather)`
  float: left;
`;
const SearchIcon = styled(IconFather)`
  float: right;
`;
const SearchView = styled.div`
  ${toolbarShadow};
  background: rgba(255,255,255,0.6);
  border-radius: 0 0 0 1rem;
  font-size: 1rem;
  text-align: center;
  height: 3.125rem;
  width: 100%;
  min-width: 15rem;
  max-width: 20rem;
  position: fixed;
  top: 3.125rem;
  right: 0;
  z-index: 104;
  display: none;
  input {
    width: 85%;
    height: 1.875rem;
    margin: 0.625rem 1rem;
    border: none;
    background: transparent;
    box-shadow: 0 0.125rem grey;
  }
  input:focus {
    box-shadow: 0 0.125rem #FF4081;
    outline: none;
  }
`;

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIconHover: false,
      showSearch: false
    };
  }

  handleMenuClick = () => {
    if (this.props.onMenuClick) {
      this.props.onMenuClick();
    }
  }

  handleSearchClick = () => {
    this.setState({showSearch: !this.state.showSearch});
  }

  handleSearch = e => {
    e.preventDefault();
    const text = e.target[0].value;
    if (this.props.onSearch) {
      this.props.onSearch(text);
    }
  }

  render() {
    return (
      <ToolbarView>
        <MenuIcon
          onClick={this.handleMenuClick}
          onMouseEnter={() => this.setState({menuIconHover: true})}
          onMouseLeave={() => this.setState({menuIconHover: false})}
          style={{backgroundColor: this.state.menuIconHover? 'rgba(85,85,85,1)': 'rgba(0,0,0,0)'}}>
            <Icon path={mdiMenu} />
        </MenuIcon>
        <Title><a href=".">MyNote</a></Title>
        <SearchIcon onClick={this.handleSearchClick}>
          <Icon path={mdiMagnify} />
        </SearchIcon>
        <SearchView style={{display: this.state.showSearch? 'block':'none'}}>
          <form action="#" method="get" onSubmit={this.handleSearch}>
            <input type="search" name="search" placeholder="search..." autoFocus={this.state.showSearch} autoComplete="off" x-webkit-speech="true"/>
          </form>
        </SearchView>
      </ToolbarView>
    );
  }
}

export default Toolbar;
