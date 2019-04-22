import React from 'react';
import styled from 'styled-components/macro';
import Icon from '@mdi/react';
import {mdiMenu, mdiMagnify} from '@mdi/js';
import { c2s } from '../common/MyCommon';
import styles from './Toolbar.module.scss';

const ToolbarView = styled.div.attrs({
  className: styles.ToolbarView
})`
  background-color: #2196f3;
  
  ${c2s(styles.MenuIcon)},
  ${c2s(styles.SearchIcon)} {
    svg { fill: white; }
  }
`;

const Title = styled.span.attrs({
  className: styles.Title
})`
  a { color: white; }
`;

const SearchView = styled.div.attrs({
  className: styles.SearchView
})`
  background: rgba(255,255,255,0.6);
  input {
    box-shadow: 0 0.125rem grey;
  }
  input:focus {
    box-shadow: 0 0.125rem #FF4081;
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
        <span className={styles.MenuIcon}
          onClick={this.handleMenuClick}
          onMouseEnter={() => this.setState({menuIconHover: true})}
          onMouseLeave={() => this.setState({menuIconHover: false})}
          style={{backgroundColor: this.state.menuIconHover? 'rgba(85,85,85,1)': 'rgba(0,0,0,0)'}}>
            <Icon path={mdiMenu} />
        </span>
        <Title><a href=".">MyNote</a></Title>
        <span className={styles.SearchIcon}
          onClick={this.handleSearchClick}>
          <Icon path={mdiMagnify} />
        </span>
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
